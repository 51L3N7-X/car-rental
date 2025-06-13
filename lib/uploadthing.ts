import { createUploadthing, type FileRouter } from "uploadthing/next";


const uploadthing = createUploadthing();

const uploadRouter: FileRouter = {
  burgerImage: uploadthing({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  }).onUploadComplete(({ file }) => {
    console.log("Uploaded file:", file.url); // This is the URL you need for the form data
  }),
};

export type OurFileRouter = typeof uploadRouter;

export default uploadRouter;
