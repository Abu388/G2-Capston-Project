import BlogmainContent from "../components/Blogmaincontent";
import Blogsidebar from "../components/Blogsidebar"

import Commentform from "../components/commentform"
import Footer from '../components/Footer'



const Blog = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <div className="relative h-[400px] w-full">
        <img
          src="/assets/packageimg/adventure.jpg"
          alt="Blog Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold max-w-3xl text-center">
            Travel Makes You New and Inspired
          </h1>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <BlogmainContent />
          <Commentform />
        </div>
        <Blogsidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
