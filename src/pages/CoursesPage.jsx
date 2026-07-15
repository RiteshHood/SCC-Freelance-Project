import Navbar from "../components/Navbar/Navbar.jsx";
import Courses from "../components/Courses/Courses.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CourseHero from "../components/Courses/CourseHero.jsx";

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <CourseHero/>
      <Courses />
      <Footer />
    </>
  );
}
