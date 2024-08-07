import { NextRequest, NextResponse } from 'next/server';

interface Params {
  id: string;
}

const comments = [
  { id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\n' },
  { id: 2, name: 'quo vero reiciendis velit similique earum', email: 'Jayne_Kuhic@sydney.com', body: 'est natus enim nihil est dolore omnis voluptatem numquam\n' },
  { id: 3, name: 'odio adipisci rerum aut animi', email: 'Nikita@garfield.biz', body: 'quia molestiae reprehenderit quasi aspernatur\n' },
  { id: 4, name: 'alias odio sit', email: 'Lew@alysha.tv', body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\n' },
  { id: 5, name: 'vero eaque aliquid doloribus et culpa', email: 'Hayden@althea.biz', body: 'harum non quasi et ratione\n' },
  { id: 6, name: 'et fugit eligendi deleniti quidem qui sint nihil autem', email: 'Presley.Mueller@myrl.com', body: 'doloribus at sed quis culpa deserunt consectetur qui praesentium\n' },
  { id: 7, name: 'repellat consequatur praesentium vel minus molestias voluptatum', email: 'Dallas@ole.me', body: 'maiores sed dolores similique labore et inventore et\n' },
  { id: 8, name: 'et omnis dolorem', email: 'Mallory_Kunze@marie.org', body: 'ut voluptatem corrupti' },
];

// PATCH handler
export async function PATCH(
  request: NextRequest,
  { params }: { params: Params }
) {
  const body = await request.json();
  const index = comments.findIndex((comment) => comment.id === parseInt(params.id));

  if (index !== -1) {
    comments[index] = {
      ...comments[index],
      ...body,
    };

    return NextResponse.json({
      message: 'dynamic route',
      comments,
    });
  }

  return NextResponse.json({
    message: 'comment not found',
  }, { status: 404 });
}

// DELETE handler
export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const remainingComments = comments.filter((comment) => comment.id !== parseInt(params.id));

  if (remainingComments.length === comments.length) {
    return NextResponse.json({
      message: 'comment not found',
    }, { status: 404 });
  }

  return NextResponse.json({
    message: 'deleted comments',
    comments: remainingComments,
  });
}
