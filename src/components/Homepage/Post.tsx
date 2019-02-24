import React from 'react';
import {
  Card, CardHeader, CardHeaderTitle, CardHeaderIcon, Icon, CardImage, CardContent, Media, MediaLeft, MediaContent, Title, Subtitle, Content, Image, CardFooter, CardFooterItem
} from 'bloomer';

interface User {
  name: string;
  username: string;
  avatarUrl: string;
}

export interface Props {
  user: User;
  guid: string;
  imageUrl: string | undefined;
  body: string;
  createdAt: Date;
  isMine: boolean;
}

const Post = (props: Props) => (
  <Card>
    { props.imageUrl && (
      <CardImage>
        <Image isRatio='4:3' src={ props.imageUrl } />
      </CardImage>
    )}
    <CardContent>
      <Media>
        <MediaLeft>
          <Image isSize='48x48' src={ props.user.avatarUrl } />
        </MediaLeft>
        <MediaContent>
          <Title isSize={4}>{ props.user.name }</Title>
          <Subtitle isSize={6}>@{ props.user.username }</Subtitle>
        </MediaContent>
      </Media>
      <Content>
        { props.body }
        <br/>
        <br/>
        <small>{ props.createdAt.toLocaleDateString() }</small>
      </Content>
    </CardContent>
    { props.isMine && (
      <CardFooter>
        <CardFooterItem href={ `/post/${props.guid}/edit` }>Edit</CardFooterItem>
        <CardFooterItem href={ `/post/${props.guid}/delete` }>Delete</CardFooterItem>
      </CardFooter>
      )}
  </Card>
);

export default Post;
