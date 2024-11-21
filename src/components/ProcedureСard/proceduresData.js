import './Tabs.css';


import laserImage from "../../assets/laser.jpg"
import depilacjaWoskiem from "../../assets/lasergolova.jpg"
import depilacjaCukrowa from "../../assets/lasernogi.jpg"


import masażKlasyczny from "../../assets/massaz body.jpg"
import masażTajski from "../../assets/massaz face.jpg"
import masażLimfatyczny from "../../assets/massaz face.jpg"


import botox from "../../assets/botox.jpg"
import kwasHialuronowy from "../../assets/Kwas_Hialuronowy.jpg"
import mezoterapia from "../../assets/mezo.jpg"
import lifting from "../../assets/lifting.jpg"


import BeforBotox from "../../assets/do/befor after.jpg"



const procedures = {
  depilacja: [
    {
      id: 'depilacja-laserowa',
      title: 'Depilacja Laserowa',
      description: 'Depilacja laserowa to bezpieczna i skuteczna metoda usuwania włosów, zapewniająca długotrwały efekt.',
      goal: 'Usuwanie niechcianych włosów na długi czas.',
      effect: 'Skóra staje się gładka już po pierwszej sesji, widoczne zmniejszenie wzrostu włosów po kilku zabiegach.',
      imgSrc: laserImage,
      price: '300-600 zł',
      duration: '30-60 minut',
    },
    {
      id: 'depilacja-woskiem',
      title: 'Depilacja Woskiem',
      description: 'Skuteczny i szybki sposób usuwania włosów z korzeniem dla gładkiej skóry.',
      goal: 'Usuwanie włosów na kilka tygodni.',
      effect: 'Gładka skóra do 4 tygodni.',
      imgSrc: depilacjaWoskiem,
      price: '100-200 zł',
      duration: '20-40 minut',
    },
    {
      id: 'depilacja-cukrowa',
      title: 'Depilacja Cukrowa',
      description: 'Naturalny sposób usuwania włosów za pomocą pasty cukrowej.',
      goal: 'Delikatne usuwanie włosów bez podrażnień.',
      effect: 'Miękka i gładka skóra.',
      imgSrc: depilacjaCukrowa,
      price: '150-250 zł',
      duration: '30 minut',
    },
    {
      id: 'depilacja-kremem',
      title: 'Depilacja Kremem',
      description: 'Prosta i szybka metoda usuwania włosów kremem.',
      goal: 'Usuwanie włosów bez bólu.',
      effect: 'Skóra bez podrażnień.',
      imgSrc: masażLimfatyczny,
      price: '50-100 zł',
      duration: '15-20 minut',
    },
  ],
  masaż: [
    {
      id: 'masaz-klasyczny',
      title: 'Masaż Klasyczny',
      description: 'Relaksujący masaż, który pomaga usunąć stres i napięcie.',
      goal: 'Relaksacja mięśni i poprawa krążenia.',
      effect: 'Uczucie lekkości i relaksu.',
      imgSrc: masażKlasyczny,
      price: '150-300 zł',
      duration: '60 minut',
    },
    {
      id: 'masaz-tajski',
      title: 'Masaż Tajski',
      description: 'Połączenie rozciągania i głębokiego masażu, które przywraca równowagę ciała i umysłu.',
      goal: 'Poprawa elastyczności i usuwanie napięcia.',
      effect: 'Energia i lekkość w ciele.',
      imgSrc: masażTajski,
      price: '200-400 zł',
      duration: '90 minut',
    },
    {
      id: 'masaz-limfatyczny',
      title: 'Masaż Limfatyczny',
      description: 'Stymulacja układu limfatycznego w celu usuwania toksyn.',
      goal: 'Poprawa odpływu limfy i zmniejszenie obrzęków.',
      effect: 'Czysta i zdrowa skóra.',
      imgSrc: '/images/lymph-massage.jpg',
      price: '200-350 zł',
      duration: '60 minut',
    },
    {
      id: 'masaz-antycellulitowy',
      title: 'Masaż Antycellulitowy',
      description: 'Intensywny masaż pomagający w walce z cellulitem i ujędrnieniu skóry.',
      goal: 'Zmniejszenie cellulitu i poprawa struktury skóry.',
      effect: 'Gładka i jędrna skóra.',
      imgSrc: '/images/cellulite-massage.jpg',
      price: '250-400 zł',
      duration: '60 minut',
    },
  ],
  medycyna: [
    {
      id: 'botox',
      title: 'Botox',
      description: 'Skuteczna metoda redukcji zmarszczek mimicznych.',
      goal: 'Wygładzenie zmarszczek i odmłodzenie skóry.',
      effect: 'Młodsza i gładka skóra.',
      imgSrc: botox,
      ImgBefor: BeforBotox,
      price: '500-800 zł',
      duration: '30 minut',
    },
    {
      id: 'kwas-hialuronowy',
      title: 'Kwas Hialuronowy',
      description: 'Głębokie nawilżenie i regeneracja skóry.',
      goal: 'Usunięcie zmarszczek i poprawa struktury skóry.',
      effect: 'Świeża i jędrna skóra.',
      imgSrc: kwasHialuronowy,
      price: '600-1000 zł',
      duration: '40 minut',
    },
    {
      id: 'mezoterapia',
      title: 'Mezoterapia',
      description: 'Metoda odmładzania skóry za pomocą iniekcji.',
      goal: 'Poprawa elastyczności skóry i redukcja drobnych zmarszczek.',
      effect: 'Zdrowa i promienna skóra.',
      imgSrc: mezoterapia,
      price: '400-800 zł',
      duration: '45 minut',
    },
    {
      id: 'lifting',
      title: 'Lifting',
      description: 'Naturalne ujędrnianie skóry bez ingerencji chirurgicznej.',
      goal: 'Ujędrnienie skóry i poprawa konturu twarzy.',
      effect: 'Młodsza i jędrna twarz.',
      imgSrc: lifting,
      price: '800-1200 zł',
      duration: '60 minut',
    },
  ],
};

export default procedures;
