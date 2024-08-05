
import BlogPost from "@/app/components/BlogPost";
import type { Metadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    // read route params
    const id = params.id

    // fetch data
    // const product = await fetch(`https://.../${id}`).then((res) => res.json())


    return {
        // title: product.title,
        title: id,
    }
}

export default function Page({ params }: { params: { id: string } }) {

    return (
        <BlogPost params={params} />
    )
}