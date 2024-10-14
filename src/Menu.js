import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
// Importing images
import menu7 from './assets/images/menu/karuppu kavuni.jpg';
import menu8 from './assets/images/menu/mappilai samba.png';
import menu9 from './assets/images/menu/seraga samba.png';
import menu10 from './assets/images/menu/navarasa.jpg';
import menu11 from './assets/images/menu/irungu-cholam.png';
import menu12 from './assets/images/menu/sivappu-cholam.png';
import menu13 from './assets/images/menu/manjal-cholam.png';
import menu14 from './assets/images/menu/pachai payaru.jpg';
import menu15 from './assets/images/menu/adai.png';
import menu16 from './assets/images/menu/appam.png';
import menu17 from './assets/images/menu/mappilai samba.png';

function Menu() {
    const [filter, setFilter] = useState('Dosa flour');

    const menuData = [
        { id: 7, heading: "கருப்பு கவுனி", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம், ஆமணக்கு, இந்துப்பு கலந்து அரைத்தது.", img: menu7, category: "Dosa flour", medical: "இதய ஆரோக்கியம்." },
        { id: 8, heading: "மாப்பிள்ளை சம்பா", price: "$10", subtitle: "கருப்பு உளுந்து, வெந்தயம் ,ஆமணக்கு, இந்துப்பு கலந்து அரைத்தது.", img: menu8, category: "Dosa flour", medical: "உடலுக்கு வலு." },
        { id: 9, heading: "சீரகச்சம்பா", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம், ஆமணக்கு, இந்துப்பு கலந்து அரைத்தது.", img: menu9, category: "Dosa flour", medical: "சிறுகுடல் ஆரோக்கியம்." },
        { id: 10, heading: "நவரா அரிசி", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம், ஆமணக்கு, இந்துப்பு கலந்து அரைத்தது.", img: menu10, category: "Dosa flour", medical: "மூட்டு ஆரோக்கியம்." },
        { id: 11, heading: "இருங்கு சோளம்", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம், ஆமணக்கு, இந்துப்பு கலந்து அரைத்தது.", img: menu11, category: "Dosa flour", medical: "நீரிழிவு நோய்க்கு." },
        { id: 12, heading: "சிவப்புச்சோளம்", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம், ஆமணக்கு, இந்துப்பு கலந்து அரைத்தது.", img: menu12, category: "Dosa flour", medical: "மலச்சிக்கலை நீக்கும்." },
        { id: 13, heading: "மஞ்சள் சோளம்", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம், ஆமணக்கு, இந்துப்பு கலந்து அரைத்தது.", img: menu13, category: "Dosa flour", medical: "கண்பார்வை ஆரோக்கியம்." },
        { id: 14, heading: "பச்சைப்பயறு", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம், ஆமணக்கு, இந்துப்பு கலந்து அரைத்தது.", img: menu14, category: "Dosa flour", medical: "ரத்த ஓட்டம் சீராகும்." },
        { id: 15, heading: "அடை மாவு", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம், ஆமணக்கு, இந்துப்பு கலந்து அரைத்தது.", img: menu15, category: "Dosa flour", medical: "பசியின்மையை போக்கும் " },
        { id: 16, heading: "ஆப்பம் மாவு", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம், ஆமணக்கு, இந்துப்பு கலந்து அரைத்தது.", img: menu16, category: "Dosa flour", medical: "உடல் பருமனைத் தடுக்க." },
        { id: 17, heading: "பூங்கார்", price: "$10", subtitle: "கருப்பு உளுந்து ,வெந்தயம், ஆமணக்கு, இந்துப்பு கலந்து அரைத்தது.", img: menu17, category: "Dosa flour", medical: "இரத்த சோகைக்கு." },
    ];

    const filteredMenuData = filter === 'all' ? menuData : menuData.filter(item => item.category === filter);

    return (
        <section className="bg-04" id="our-menu">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading">
                            <span style={{ fontSize: "40px", fontWeight: "bold" }}>Menu</span>
                            <h2>Explore Our Healthy Menu</h2>
                            <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                                    நம் முன்னோர்களின் உணவு வகைகள், நோயற்ற வாழ்வு முறைகளை மீட்டெடுக்கும் நோக்கில் பூச்சிக்கொல்லி, செயற்கை உரம், Preservative என்ற விசத்தன்மைகளற்ற, இயற்கை உணவுகள், கலப்படமற்ற இடு பொருட்களுடன், உணர்வுடனான உணவுமுறை என்ற நோக்கில் வழங்கப்படுகின்ற <span style={{display:'inline'}}><i><b style={{fontSize:'20px'}}>மாவு வகைகள்..</b></i></span>
                                </p>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="row">
                        {filteredMenuData.map((item, index) => (
                            <div className="col-md-4 col-sm-6 mb-6" key={index}>
                                <div className="wrapper bg-white shadow-lg shadow-black rounded-lg overflow-hidden">
                                    <div className="tab-content">
                                        <figure>
                                            <img src={item.img} alt='img' className="w-full h-48 object-cover" />
                                        </figure>
                                        <div className="sentence p-4">
                                            <h3 className="text-lg font-bold">
                                                {item.heading}<span className="text-sm">{item.price}</span>
                                            </h3>
                                            <h6 className="mt-2"><strong>குறிப்பு : </strong>{item.subtitle}</h6>
                                            <h6 className="mt-2"><strong>மருத்துவம்  : </strong>{item.medical}</h6>
                                        </div>
                                        <div className="rate-box flex items-center justify-between px-4 pb-4">
                                            <ol className="flex space-x-1">
                                                {[...Array(4)].map((_, i) => (
                                                    <li key={i}>
                                                        <span className="flaticon-star"><FaStar /></span>
                                                    </li>
                                                ))}
                                            </ol>
                                            <div className="plus">
                                                <a href="https://wa.me/7010652833" target='blank' rel="noopener noreferrer">
                                                    <span className="flaticon-plus text-2xl"><AiOutlineShop className="text-white" /></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;
