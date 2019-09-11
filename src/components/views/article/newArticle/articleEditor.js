import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import axios from 'axios';

const instance = axios.create({
  header: {},
});

const uploadImage = async (file) => {
  const url = 'https://api.cloudinary.com/v1_1/mazus/image/upload';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ml_default');
  const res = await instance.post(url, formData, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
  return {
    success: 1,
    file: {
      url: res.data.url,
    },
  };
};

const editor = new EditorJS({
  holder: 'editorjs',
  placeholder: 'Body...',
  tools: {
    header: {
      class: Header,
      inlineToolbar: ['link'],
    },
    list: {
      class: List,
      inlineToolbar: [
        'link',
        'bold',
      ],
    },
    image: {
      class: ImageTool,
      inlineToolbar: true,
      config: {
        placeholder: 'Paste image URL',
        uploader: {
          uploadByFile(file) {
            return uploadImage(file);
          },
        },
      },
    },
  },
});

export default editor;
