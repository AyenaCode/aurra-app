import { Navbar } from "../components/Navbar";

const Blog = () => {
  return (
    <>
      <Navbar />
      <section id="blog" className="m-5">
        <h2>Blog</h2>
        <div>
          <div>
            <h3>5 tendances en marketing digital à surveiller en 2024</h3>
          </div>
          <div>
            <h3>Comment optimiser votre stratégie de contenu</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
