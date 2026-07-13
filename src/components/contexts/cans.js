import FelineBeefHoki from '../../assets/img/Feline-BeefHoki.png';
import FelineChickenVenision from '../../assets/img/Feline-ChickenVenision.png';
import CanadaBeef from '../../assets/img/Canada-Beef.png'
import RawzChickenHerring from '../../assets/img/Rawz-ChickenHerring.png'
import OrijenChicken from '../../assets/img/Orijen-Chicken.png'
import Royal from '../../assets/img/Royal.png'
import Wellness from '../../assets/img/Wellness.png'
import RawzTurkey from '../../assets/img/Rawz-Turkey.png'
import FelineLamb from '../../assets/img/Feline-Lamb.png'

const cans = [
    {
        id: 1,
        name: "Feline Natural Pate - Beef & Hoki",
        image: FelineBeefHoki,
        price: "$3.59",
        brand: "Feline Natural",
        gums: "No",
        ingredients: ["Beef", "Water Sufficient for Processing", "Beef Heart", "Hoki ..."]
    },
    {
        id: 2,
        name: "Feline Natural Pate - Chicken & Venison",
        image: FelineChickenVenision,
        price: "$3.59",
        brand: "Feline Natural",
        gums: "No",
        ingredients: ["Chicken", "Chicken Heart", "Water Sufficient for Processing..."]
    },
    {
        id: 3,
        name: "Canada Fresh - Beef",
        image: CanadaBeef,
        price: "$2.89",
        brand: "Others",
        gums: "Yes",
        ingredients: ["Beef", "Water Sufficient for Processing..."]
    },
    {
        id: 4,
        name: "Rawz Pate - Chicken & Herring",
        image: RawzChickenHerring,
        price: "$4.09",
        brand: "Rawz",
        gums: "No",
        ingredients: ["Chicken", "Herring..."]
    },
    {
        id: 5,
        name: "Orijen pate - shredded chicken",
        image: OrijenChicken,
        price: "$3.09",
        brand: "Orijen",
        gums: "No",
        ingredients: ["Chicken", "Chicken Heart..."]
    },
    {
        id: 6,
        name: "Royal Canin - Calm",
        image: Royal,
        price: "$3.71",
        brand: "Others",
        gums: "Yes",
        ingredients: ["Dehydrated Poultry Protein", "Maize & Rice..."]
    },
    {
        id: 7,
        name: "Wellness core pate - whitefish, salmon & herring",
        image: Wellness,
        price: "$5.29",
        brand: "Wellness",
        gums: "Yes",
        ingredients: ["Whitefish", "Salmon..."]
    },
    {
        id: 8,
        name: "Rawz Pate - Turkey, Turkey Liver & Goat’s Milk",
        image: RawzTurkey,
        price: "$4.09",
        brand: "Rawz",
        gums: "No",
        ingredients: ["Trukey", "Turkey Liver"]
    },
    {
        id: 9,
        name: "Feline Natural Pate - Lamb",
        image: FelineLamb,
        price: "$3.59",
        brand: "Feline Natural",
        gums: "No",
        ingredients: ["Lamb", "Lamb Liver..."]
    }

];

export default cans;