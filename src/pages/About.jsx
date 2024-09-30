import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewsletterBox from "../components/Newsletter"

const About = () => {
  return (
    <div>

    <div className="text-2xl text-center pt-8 border-t">
      <Title text1={'ABOUT'} text2={'US'} />
    </div>

    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Welcome to Forever, where timeless fashion meets modern elegance. We are committed to offering stylish, high-quality apparel that suits your unique taste, whether you are dressing for everyday life or a special occasion.</p>
        <p>At Forever, we believe in creating fashion that not only looks good but also feels good, with a focus on sustainable practices and ethical production. Explore our collections and find pieces that you will love to wear again and again</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Forever, our mission is to empower individuals through elegant and sustainable fashion. We are committed to providing high-quality apparel that not only enhances your appearance but also boosts your confidence.</p>
      </div>
    </div>

    <div className="text-xl py-4">
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>

    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance:</b>
        <p className="text-gray-600">At Forever, we prioritize quality in every aspect of our products and services. Our dedicated team meticulously tests and reviews each item to ensure it meets our high standards, providing you with clothing that is not only stylish but also durable and reliable.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience:</b>
        <p className="text-gray-600">At Forever, we strive to make your shopping experience as effortless as possible. With our user-friendly website, seamless navigation, and convenient payment options, finding and purchasing your favorite fashion pieces is quick and easy.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service:</b>
        <p className="text-gray-600">At Forever, we are dedicated to providing exceptional customer service that goes above and beyond your expectations. Our friendly and knowledgeable team is always ready to assist you, ensuring a personalized shopping experience from start to finish.</p>
      </div>
    </div>

    <NewsletterBox />

    </div>
  )
}

export default About
