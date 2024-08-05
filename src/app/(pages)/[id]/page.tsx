import BlogPost from "@/app/components/BlogPost";
import type { Metadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const id = params.id

    const product = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())


    return {
        title: product.title,
    }
}

export default function Page({ params }: { params: { id:  number } }) {

    return (
        <BlogPost params={params} />
    )
}