import path from "path";
import matter from "gray-matter";
import fs from "fs";

export const getSlugs = async () => {
  let paths = fs.readdirSync(POST_PATH);
  return paths.map((i) => i.split(".")[0]);
};

export const getAlllessons = (lesson) => {
  if (lesson.length > 2) {
    return { notFound: true };
  }
  const state = {
    notFound: false,
    props: {},
  };
  state.props.lesson = lesson[0];
  state.props.subpage = lesson.length > 1 ? lesson[1] : null;
  const CONFIG_PATH = path.join(process.cwd(), "configs");

  if (fs.existsSync(path.resolve(`${CONFIG_PATH}/${lesson[0]}.json`))) {
    const rawdata = fs.readFileSync(`${CONFIG_PATH}/${lesson[0]}.json`);
    state.props.chapters = JSON.parse(rawdata);
    if (state.props.subpage) {
      const POSTPATH = path.join(process.cwd(), "lessons");
      const chapter = state.props.chapters.filter(
        (i) => i.slug === state.props.subpage
      );
      if (chapter.length > 0) {
        if (
          fs.existsSync(
            path.resolve(
              `${POSTPATH}/${state.props.lesson}/${chapter[0].head}/${state.props.subpage}.mdx`
            )
          )
        ) {
          const postPath = `${POSTPATH}/${state.props.lesson}/${chapter[0].head}/${state.props.subpage}.mdx`;
          const source = fs.readFileSync(postPath);
          const { content, data } = matter(source);
          state.props.content = content;
        } else {
          return { notFound: true };
        }
  
      }
    }
    return state;
  }
  state.notFound = true;
  return state;
};
