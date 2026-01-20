import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";

export default class CustomEditor extends ClassicEditorBase {}

CustomEditor.builtinPlugins = [
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Image,
  ImageResize, // ⬅️ plugin resize gambar
  ImageToolbar,
  ImageUpload,
];

CustomEditor.defaultConfig = {
  toolbar: ["heading", "bold", "italic", "imageUpload", "undo", "redo"],
  image: {
    toolbar: ["imageStyle:full", "imageStyle:side", "imageTextAlternative"],
    resizeUnit: "px", // bisa juga '%'
  },
};
