import { Props as PostProps } from '../components/Homepage/Post';

const emulateError = false;

export const loadPosts = (): Promise<PostProps[]> => {
  return new Promise((resolve, reject) => {
    if (emulateError) {
      reject('500 - Internal Server Error');
    } else {
      resolve(Array(6).fill(0).map(_ => ({
        user: {
          name: 'John Doe',
          username: 'johndoe',
          avatarUrl: 'https://via.placeholder.com/96x96',
        },
        guid: 'ce4d5cba-33ef-4e10-8fdf-bbd6737b32ba',
        imageUrl: undefined,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor nunc non metus eleifend, id ornare nulla sollicitudin. Phasellus blandit lacus vitae ullamcorper lobortis. Vivamus in neque tortor.',
        createdAt: new Date('2019-02-24T00:21:15.925Z'),
        isMine: false,
      })))
    }
  });
};
