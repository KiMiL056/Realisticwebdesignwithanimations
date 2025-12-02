import svgPaths from "./svg-rq1z66fbls";
import imgLogoSman11Surabaya1 from "figma:asset/a6ffcd41688f760e85d7b76954f54f7067567b49.png";
import imgImage2 from "figma:asset/bd75476f7412b6d6479e3a8c24e3bb083f516dbe.png";
import imgImage5 from "figma:asset/40dc6cbd19966fd169472852883d2f36d448ad4e.png";
import imgImage4 from "figma:asset/56d5c7c764fcb386eae3a53c1b7d1386bc99902c.png";
import imgImage3 from "figma:asset/803d0efd875fdf3317720af8cbefc8e472b8bb3c.png";
import imgImage6 from "figma:asset/e9e94ba519d929723a73605e1294e1be764d0c28.png";
import { motion } from "motion/react";
import { useState } from "react";

function Group() {
  return (
    <div className="absolute inset-[8.33%_12.5%_0.78%_12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p2c873200} fill="var(--fill-0, #FFF5F5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteLocationFill() {
  return (
    <div className="absolute left-[111px] overflow-clip size-[20px] top-[9px]" data-name="mingcute:location-fill">
      <Group />
    </div>
  );
}

function TablerLocationFilled() {
  return (
    <div className="absolute left-[1103px] size-[24px] top-[9px]" data-name="tabler:location-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler:location-filled">
          <path d={svgPaths.p8fcb000} fill="var(--fill-0, #FFFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#3f88d3] h-[41px] left-[-62px] overflow-clip top-[-3px] w-[1342px]">
      <MingcuteLocationFill />
      <TablerLocationFilled />
      <div className="absolute inset-[26.83%_26.79%_29.27%_71.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
          <path d={svgPaths.p288d9500} fill="var(--fill-0, #FFF6F6)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[18px] left-[131px] not-italic text-[12px] text-white top-[12px] w-[238px]">Jl. Manukan Tengah, Manukan Kulon</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[20px] left-[1134px] not-italic text-[#fff8f8] text-[14px] text-nowrap top-[12px] whitespace-pre">www.sman11sby.com</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[20px] left-[995px] not-italic text-[14px] text-nowrap text-white top-[12px] whitespace-pre">(031) 7405420</p>
    </div>
  );
}

function MaterialSymbolsWifiCalling() {
  return <div className="absolute left-[564px] size-[24px] top-[46px]" data-name="material-symbols:wifi-calling" />;
}

function Group1() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  return (
    <div className="absolute contents font-['Poppins:SemiBold',sans-serif] leading-[24px] left-[564px] not-italic text-[16px] text-black top-[78px]">
      <motion.p 
        className="absolute h-[23px] left-[975px] top-[78px] w-[60px] cursor-pointer"
        whileHover={{ scale: 1.05, color: "#3f88d3" }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setHoveredItem("kontak")}
        onHoverEnd={() => setHoveredItem(null)}
      >
        Kontak
      </motion.p>
      <motion.p 
        className="absolute h-[20px] left-[900px] top-[78px] w-[57px] cursor-pointer"
        whileHover={{ scale: 1.05, color: "#3f88d3" }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setHoveredItem("galeri")}
        onHoverEnd={() => setHoveredItem(null)}
      >
        Galeri
      </motion.p>
      <motion.p 
        className="absolute h-[20px] left-[803px] top-[78px] w-[76px] cursor-pointer"
        whileHover={{ scale: 1.05, color: "#3f88d3" }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setHoveredItem("prestasi")}
        onHoverEnd={() => setHoveredItem(null)}
      >
        Prestasi
      </motion.p>
      <motion.p 
        className="absolute h-[20px] left-[721px] top-[78px] w-[54px] cursor-pointer"
        whileHover={{ scale: 1.05, color: "#3f88d3" }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setHoveredItem("profil")}
        onHoverEnd={() => setHoveredItem(null)}
      >
        Profil
      </motion.p>
      <motion.p 
        className="absolute h-[20px] left-[638px] top-[78px] w-[55px] cursor-pointer"
        whileHover={{ scale: 1.05, color: "#3f88d3" }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setHoveredItem("berita")}
        onHoverEnd={() => setHoveredItem(null)}
      >
        Berita
      </motion.p>
      <motion.p 
        className="absolute h-[17px] left-[564px] top-[78px] w-[56px] cursor-pointer"
        whileHover={{ scale: 1.05, color: "#3f88d3" }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setHoveredItem("home")}
        onHoverEnd={() => setHoveredItem(null)}
      >
        home
      </motion.p>
    </div>
  );
}

function Frame1() {
  return (
    <motion.div 
      className="absolute bg-[#3f88d3] h-[32px] left-[1100px] overflow-clip rounded-[10px] top-[73px] w-[102px] cursor-pointer"
      whileHover={{ scale: 1.05, backgroundColor: "#2c6db5" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] h-[20px] justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[#fbfeff] text-[16px] text-center top-[16px] translate-x-[-50%] translate-y-[-50%] w-[53px]">
        <p className="leading-[24px]">LOGIN</p>
      </div>
    </motion.div>
  );
}

function Group2() {
  return (
    <div className="absolute contents font-['Poppins:Medium',sans-serif] leading-[32px] left-[131px] not-italic text-[#070707] text-[24px] top-[60px]">
      <p className="absolute h-[35px] left-[131px] top-[60px] w-[208px]">SMA NEGERI 11</p>
      <p className="absolute left-[150px] text-nowrap top-[86px] whitespace-pre">SURABAYA</p>
    </div>
  );
}

function MacBookAir() {
  return (
    <div className="bg-white h-[832px] overflow-clip relative shrink-0 w-full" data-name="MacBook Air - 2">
      <div className="absolute bg-white h-[163px] left-0 top-[-23px] w-[1319px]" />
      <motion.div 
        className="absolute h-[65px] left-[65px] top-[56px] w-[48px]" 
        data-name="logo sman 11 surabaya 1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoSman11Surabaya1} />
      </motion.div>
      <Frame />
      <MaterialSymbolsWifiCalling />
      <motion.div 
        className="absolute h-[694px] left-[522px] top-[140px] w-[1108px]" 
        data-name="image 2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </motion.div>
      <motion.div 
        className="absolute h-[693px] left-[-88px] top-[140px] w-[1109px]" 
        data-name="image 1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </motion.div>
      <Group1 />
      <Frame1 />
      <Group2 />
    </div>
  );
}

function Frame2() {
  return (
    <motion.div 
      className="absolute bg-[#fda29b] border border-black border-solid h-[615px] left-[43px] overflow-clip rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] top-[154px] w-[370px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10, boxShadow: "0px 12px 24px 0px rgba(0,0,0,0.3)" }}
    >
      <div className="absolute flex h-[2.04px] items-center justify-center left-[-1px] top-[526px] w-[370px]" style={{ "--transform-inner-width": "370", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.684deg]">
          <div className="h-0 relative w-[370.006px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370 1">
                <g filter="url(#filter0_i_1_115)" id="Line 1">
                  <line stroke="var(--stroke-0, #FECDCA)" x2="370.006" y1="0.5" y2="0.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5" id="filter0_i_1_115" width="370.006" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                    <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_115" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <motion.div 
        className="absolute h-[288px] left-[-12px] top-[-19px] w-[433px]" 
        data-name="image 5"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </motion.div>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[102px] leading-[18px] left-[33px] not-italic text-[12px] text-black top-[383px] w-[301px]">SMAN 11 surabaya memiliki delegasi yang patut diperhitungkan. Ia adalah Pepry Delilah. Siswa kelas XI yang berhasil menjuarai Energen Champion SAC Indonesia 2023 Jakarta Banten Qualifiers.</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[30px] left-[34px] not-italic text-[#100f0f] text-[20px] top-[281px] w-[300px]">Delegasi SMAN 11 surabaya Menangi Lompat Jauh Jakarta Banten Qualifiers</p>
    </motion.div>
  );
}

function Frame3() {
  return (
    <motion.div 
      className="absolute bg-[#fda29b] border border-black border-solid h-[615px] left-[455px] overflow-clip rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] top-[154px] w-[370px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      whileHover={{ y: -10, boxShadow: "0px 12px 24px 0px rgba(0,0,0,0.3)" }}
    >
      <motion.div 
        className="absolute h-[267px] left-[-2px] top-[-1px] w-[378px]" 
        data-name="image 4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </motion.div>
      <div className="absolute flex h-[2.04px] items-center justify-center left-[-2px] top-[524px] w-[370px]" style={{ "--transform-inner-width": "370", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.684deg]">
          <div className="h-0 relative w-[370.006px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370 1">
                <g filter="url(#filter0_i_1_104)" id="Line 2">
                  <line stroke="var(--stroke-0, #FDA29B)" x2="370.006" y1="0.5" y2="0.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5" id="filter0_i_1_104" width="370.006" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                    <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_104" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[108px] leading-[18px] left-[32px] not-italic text-[12px] text-black top-[382px] w-[301px]">Menjadi siswa berprestasi bukanlah suatu hal yang diwariskan, tetapi merupakan hasil dari dedikasi, kerja keras, dan strategi yang tepat. Untuk membantu siswa meraih kesuksesan dalam pendidikan, berikut adalah beberapa tips yang dapat diikuti:</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[30px] left-[32px] not-italic text-[#111010] text-[20px] top-[279px] w-[290px]">Tips Sukses Menjadi Siswa Berprestasi: Menyongsong Kesuksesan Pendidikan</p>
    </motion.div>
  );
}

function Frame4() {
  return (
    <motion.div 
      className="absolute bg-[#fda29b] border border-black border-solid h-[615px] left-[867px] overflow-clip rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] top-[154px] w-[370px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -10, boxShadow: "0px 12px 24px 0px rgba(0,0,0,0.3)" }}
    >
      <motion.div 
        className="absolute h-[266px] left-[-1px] top-[-1px] w-[376px]" 
        data-name="image 3"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </motion.div>
      <div className="absolute flex h-[2.04px] items-center justify-center left-[-1px] top-[522px] w-[370px]" style={{ "--transform-inner-width": "370", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.684deg]">
          <div className="h-0 relative w-[370.006px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370 1">
                <line id="Line 3" stroke="var(--stroke-0, black)" x2="370.006" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute font-['Poppins:Regular',sans-serif] h-[119px] leading-[18px] left-[36px] not-italic text-[12px] text-black top-[383px] w-[301px]">
        <p className="mb-0 whitespace-pre-wrap">{`SMAN 11 surabaya  dengan gembira mengumumkan kalender akademik untuk tahun pelajaran 2025/2026. Kalender ini dirancang dengan cermat untuk memberikan panduan jelas bagi siswa, guru, dan orang tua dalam merencanakan kegiatan akademik dan non-akademik sepanjang tahun. `}</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[30px] left-[36px] not-italic text-[#0e0d0d] text-[20px] top-[282px] w-[349px]">Pengumuman Kalender Akademik Tahun Pelajaran 2025/2026</p>
    </motion.div>
  );
}

function MacBookAir1() {
  return (
    <div className="bg-white h-[832px] overflow-clip relative shrink-0 w-full" data-name="MacBook Air - 3">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <motion.p 
        className="absolute font-['Poppins:Bold',sans-serif] leading-[60px] left-[450px] not-italic text-[#0d0c0c] text-[48px] text-nowrap top-[42px] tracking-[-0.96px] whitespace-pre"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {`Berita & Artikel`}
      </motion.p>
    </div>
  );
}

function Frame7() {
  return (
    <motion.div 
      className="absolute bg-[#429bf4] h-[32px] left-[222px] overflow-clip rounded-[10px] top-[220px] w-[107px] cursor-pointer"
      whileHover={{ scale: 1.05, backgroundColor: "#2c7dd5" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%-43.5px)] not-italic text-[#fbfeff] text-[12px] top-[16px] translate-y-[-50%] w-[88px]">
        <p className="leading-[18px]">hubungi kami</p>
      </div>
    </motion.div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[17.67%_27.58%_76.68%_69.92%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 47">
        <g id="Group" opacity="0.5">
          <path clipRule="evenodd" d={svgPaths.p1f60a80} fill="var(--fill-0, #5E5252)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pfc953f0} fill="var(--fill-0, #5E5252)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MacBookAir2() {
  return (
    <div className="bg-white h-[832px] overflow-clip relative shrink-0 w-[1280px]" data-name="MacBook Air - 4">
      <motion.div 
        className="absolute h-[279px] left-[177px] top-[411px] w-[204px]" 
        data-name="logo sman 11 surabaya 2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoSman11Surabaya1} />
      </motion.div>
      <div className="absolute bg-[#667085] h-[335px] left-[-94px] top-[-11px] w-[1467px]" />
      <motion.div 
        className="absolute font-['Phetsarath:Bold',sans-serif] h-[113px] leading-[0] left-[418px] not-italic text-[#0d0d0d] text-[0px] top-[451px] w-[168px]"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-['Poppins:Bold',sans-serif] leading-[28px] mb-0 text-[18px]">Hubungi kami</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[18px] mb-0 text-[12px]">Jl. Manukan Tengah, Manukan Kulon,</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[18px] text-[12px]">Kec. Tandes, Surabaya, Jawa Timur 60185</p>
      </motion.div>
      <div className="absolute font-['Poppins:Bold',sans-serif] leading-[0] left-[418px] not-italic text-[#121010] text-[0px] text-nowrap top-[597px] whitespace-pre">
        <p className="leading-[20px] mb-0 text-[14px]">sman11sby@gmail.com</p>
        <p className="leading-[20px] text-[14px]">
          &nbsp;
          <a className="cursor-pointer" href="https://www.google.com/search?sca_esv=83abbd765e15724a&biw=1280&bih=551&sxsrf=AE3TifOgfSWCISW-lX17lnAbUc9nVj_x2g:1764027251090&q=sman+11+surabaya&source=lnms&fbs=AIIjpHybgd8rSRq_uc_FPPRKT4GY7EV1oMvQKI3Ul9O4_tW8ixSVrBO11OEJVEd9lThgCErhiz8zudQ3ms8Nk_bHx2y15xaT7qjWdGx3pwzRm2E8pYfvI9DaB2SzxxCyQ3mr8awcit_cGnUzyaSVLHCww4dHf60KI9FMjQ0ilQschz840hWQTTkkLAHJdI5SLqz8i1kf_pxJGJNaw2itaU7p5ub2BcoV7AyUuV_EJ8OysFQ_H9RhGEU&sa=X&ved=2ahUKEwiDqLPN-YuRAxU34jgGHYcsAbsQ0pQJegQICRAB#">
            <span className="font-['Poppins:Bold',sans-serif] leading-[20px] not-italic text-[#121010] text-[14px]" href="https://www.google.com/search?sca_esv=83abbd765e15724a&biw=1280&bih=551&sxsrf=AE3TifOgfSWCISW-lX17lnAbUc9nVj_x2g:1764027251090&q=sman+11+surabaya&source=lnms&fbs=AIIjpHybgd8rSRq_uc_FPPRKT4GY7EV1oMvQKI3Ul9O4_tW8ixSVrBO11OEJVEd9lThgCErhiz8zudQ3ms8Nk_bHx2y15xaT7qjWdGx3pwzRm2E8pYfvI9DaB2SzxxCyQ3mr8awcit_cGnUzyaSVLHCww4dHf60KI9FMjQ0ilQschz840hWQTTkkLAHJdI5SLqz8i1kf_pxJGJNaw2itaU7p5ub2BcoV7AyUuV_EJ8OysFQ_H9RhGEU&sa=X&ved=2ahUKEwiDqLPN-YuRAxU34jgGHYcsAbsQ0pQJegQICRAB#">
              (031) 7405420
            </span>
          </a>
        </p>
      </div>
      <motion.div 
        className="absolute font-['Phetsarath:Bold',sans-serif] leading-[0] left-[717px] not-italic text-[#0e0d0d] text-[0px] text-nowrap top-[454px] whitespace-pre"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="font-['Poppins:Bold',sans-serif] leading-[24px] mb-0 text-[16px]">Tentang Kami</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[18px] mb-0 text-[12px]">profil kami</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[18px] mb-0 text-[12px]">{`berita & artikel`}</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[18px] mb-0 text-[12px]">{`prestasi & penghargaan`}</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[18px] mb-0 text-[12px]">download file</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[18px] mb-0 text-[12px]">galeri gambar</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[18px] text-[12px]">galeri video</p>
      </motion.div>
      <div className="absolute bg-[#3f88d3] h-[84px] left-[-49px] top-[765px] w-[1360px]" />
      <motion.div 
        className="absolute font-['Phetsarath:Bold',sans-serif] h-[139px] leading-[0] left-[222px] not-italic text-[0px] text-white top-[63px] w-[437px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-['Poppins:Bold',sans-serif] leading-[32px] mb-0 text-[24px]">Belajar Desain dengan Figma</p>
        <p className="font-['Poppins:Bold',sans-serif]">
          <span className="leading-[28px] text-[18px]">Dalam video tutorial cara menggunakan Figma, penonton akan dipandu melalui langkah-langkah mudah untuk membuat desain visual yang menarik dan intuitif</span>
          <span className="leading-[30px] text-[20px]">.</span>
        </p>
      </motion.div>
      <Frame7 />
      <motion.div 
        className="absolute h-[222px] left-[776px] rounded-[20px] top-[57px] w-[269px]" 
        data-name="image 6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgImage6} />
      </motion.div>
      <Group3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1280px]">
      <MacBookAir />
      <MacBookAir1 />
      <MacBookAir2 />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col w-full">
        <Frame5 />
      </div>
    </div>
  );
}