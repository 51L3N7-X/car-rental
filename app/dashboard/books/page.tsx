"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Booking } from "@/types/public";
import { Card } from "@/components/ui/card";

export default function BookingsTable() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery<Booking[]>({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch("/api/bookings");
      if (!res.ok) throw new Error("Failed to fetch bookings");
      return res.json();
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });

  if (isLoading) return <p>Loading bookings...</p>;
  if (error) return <p>Error loading bookings.</p>;

  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Bookings</h2>
      <Card className="p-4 mt-6">
        {data?.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Phone</th>
                  <th className="p-2 border">Car ID</th>
                  <th className="p-2 border">Start</th>
                  <th className="p-2 border">End</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((booking) => (
                  <tr key={booking.id}>
                    <td className="p-2 border">{booking.userName}</td>
                    <td className="p-2 border">{booking.userPhone}</td>
                    <td className="p-2 border">{booking.carId}</td>
                    <td className="p-2 border">{booking.startDate}</td>
                    <td className="p-2 border">{booking.endDate}</td>
                    <td className="p-2 border">
                      <select
                        value={booking.status}
                        onChange={(e) =>
                          updateMutation.mutate({
                            id: booking.id,
                            status: e.target.value,
                          })
                        }
                        className="border px-2 py-1 rounded"
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
