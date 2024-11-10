import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import Newsgrid from "@/components/blog/Newsgrid";

const BlogPage = () => {
    return (

        <Layout>
        
            <Newsgrid/>
        </Layout>
    );
};
export default BlogPage;