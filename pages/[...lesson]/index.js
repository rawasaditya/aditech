import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import ContentPills from "../../components/SideBar/contentPills";
import { getAlllessons } from "../api/api";
export default function index(props) {
  const chapters = {};
  props.chapters.map((i) => {
    if (i.head in chapters) {

      chapters[i.head] = [...chapters[i.head] , {
        slug: i.slug,
        title: i.title,
        tags: i.tags,
        date: i.date,
        excerpt: i.excerpt,
      }] 
    } else {
      chapters[i.head] = [
        {
          slug: i.slug,
          title: i.title,
          tags: i.tags,
          date: i.date,
          excerpt: i.excerpt,
        },
      ];
    }
  });


  return (
    <>
      <div className="flex w-auto">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={true}
          onChange={() => {}}
        />
        <div className="w-[20%] ">
          <div className="h-screen drawer-side">
            <ul className="sticky top-0 h-full p-4 pb-16 overflow-y-auto bg-base-100 text-base-content">
              {Object.keys(chapters).map((i, idx) => (
                
                <>
                  <ContentPills
                    key={idx}
                    collapsed={chapters[i].some((j) => j.slug == props.subpage)}
                    chapterCounts={chapters[i].length}
                    title={i}
                    chapters={chapters[i]}
                    lesson={props.lesson}
                  />
                </>
              ))}
            </ul>
          </div>
        </div>

        <div className="drawer-content w-[79%] p-10  ">
          <article className="max-w-full prose prose-lg text-white prose-a:text-blue-300 prose-code:text-white prose-li:list-item">
            <MDXRemote {...props.source} />
          </article>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { lesson } = params;
  const state = getAlllessons(lesson);

  state.props.source = await serialize(state.props.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });
  return { ...state };
}
