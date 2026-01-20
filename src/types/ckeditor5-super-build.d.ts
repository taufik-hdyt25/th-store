// types/ckeditor5-super-build.d.ts
declare module "ckeditor5/build/ckeditor" {
  import type { Editor } from "@ckeditor/ckeditor5-core";

  const ClassicEditor: {
    create(
      element: HTMLElement | string,
      config?: Record<string, unknown>,
    ): Promise<Editor>;
  };

  export default ClassicEditor;
}
