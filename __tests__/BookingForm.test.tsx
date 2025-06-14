import { render, screen, fireEvent } from "@testing-library/react";
import BookCarPage from "../app/book/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";


jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));


const queryClient = new QueryClient();

describe("BookCarPage", () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: (key: string) => (key === "carId" ? "test-car-id" : null),
    });
  });

  it("shows validation errors if fields are empty", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BookCarPage />
      </QueryClientProvider>
    );

    const button = screen.getByRole("button", { name: /book now/i });
    fireEvent.click(button);

    // verify validation errors
    expect(await screen.findByText("Name is too short")).toBeInTheDocument();
    expect(await screen.findByText("Phone is too short")).toBeInTheDocument();
    expect(
      await screen.findByText("Start date is required")
    ).toBeInTheDocument();
    expect(await screen.findByText("End date is required")).toBeInTheDocument();
  });

  it("pre-fills carId from query parameters", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BookCarPage />
      </QueryClientProvider>
    );

    const carIdInput = screen.getByLabelText("Car ID") as HTMLInputElement;
    expect(carIdInput.value).toBe("test-car-id");
  });
});
