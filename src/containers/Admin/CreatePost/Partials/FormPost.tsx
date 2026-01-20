"use client";

import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface FormPostProps {
  value?: string;
  onChange?: (html: string) => void;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Base64UploadAdapterPlugin(editor: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
    return {
      upload: () =>
        loader.file.then(
          (file: File) =>
            new Promise((resolve) => {
              const reader = new FileReader();
              reader.onload = () => resolve({ default: reader.result });
              reader.readAsDataURL(file);
            }),
        ),
      abort: () => {},
    };
  };
}

const FormPost = ({ value = "", onChange }: FormPostProps) => {
  return (
    <Box
      sx={{
        "& .ck-editor__editable": {
          minHeight: "600px",
          padding: "0px 20px",
        },
      }}
    >
      <FormControl mb={5} display={"flex"} alignItems={"center"}>
        <FormLabel>Title</FormLabel>
        <Input placeholder={"Buat judul"} />
      </FormControl>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(_, editor) => {
          console.log(editor.getData());

          onChange?.(editor.getData());
        }}
        config={{
          licenseKey: "GPL",
          placeholder: "Tulis artikel kamu di sini...",
          toolbar: {
            items: [
              "heading",
              "|",
              "bold",
              "italic",
              "underline",
              "link",
              "|",
              "bulletedList",
              "numberedList",
              "|",
              "blockQuote",
              "insertTable",
              "imageUpload",
              "|",
              "undo",
              "redo",
            ],
          },
          image: {
            toolbar: [
              "imageTextAlternative",
              "imageStyle:full",
              "imageStyle:side",
              "resizeImage:25",
            ],
            resizeUnit: "px",
          },
          extraPlugins: [Base64UploadAdapterPlugin],
          simpleUpload: {
            uploadUrl: "data:image;base64",
          },
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
            ],
          },
        }}
      />
    </Box>
  );
};

export default FormPost;
