
import BlogPost from "@/app/components/BlogPost";

export default function Page({ params }: { params: { id: number } }) {

    return (
        <BlogPost params={params} />
    )
}