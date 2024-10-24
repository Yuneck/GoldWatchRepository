const assets = [];

const purchases = [];

const purchase = {
    id: null,
    date: null,
    value: null,
    currency: null, //currency id
    sellerName: '',
    assetsIds: [], //collection od assets ids from singleAsset.id
    nultipack: null,
    multipackQuantity: null,
}

const singleAsset = {
    id: null,
    purchaseId: '', // = id from purchase
    type: '',  //from assetType
    number: '',
    price: null, 
    name: '',
    groupName: '',
    quantity: null, //number of assets bought within one purchase
    manufacturer: '',
    fineness: '',
    picture: [], //collection of pictures from picture
    pureMetalContent: null, //gramms
    weight: null,
    measurementUnit: '',  //from measurementUnits
    dimension: [], //from dimensionType
    yearOfEdition: null, //only for coins
    denomination: '', 
}

const dimensionType = {
    diameter: null, //for coin
    thickness: null, //for coin and bar
    lenght: null,   //for bar
    width: null,    //for bar
}

const picture = {
    pic1: null,
    pic2: null,
    pic3: null,
}

const summary = {
    ownedMetals: ['Gold','Silver','Platinum','Palladium'],
    ownedBars: [], // gold, silver,...
    ownedCoins: [], // gold, silver,...
    totalValueOfPurchases: null,

    totalValueOfGoldBars: null,
    totalValueOfSilverBars: null,
    totalValueOfPlatinumBars: null,
    totalValueOfPalladiumBars: null,

    totalValueOfGoldCoins: null,
    totalValueOfSilverCoins: null,
    totalValueOfPlatinumCoins: null,
    totalValueOfPalladiumCoins: null,
}

const summaryGold = {
    numberOfGolsCoins: null,

    numberOfGoldBars1g: null,
    numberOfGoldBars25g: null, //2,5gr
    numberOfGoldBars5g: null,
    numberOfGoldBars10g: null,
    numberOfGoldBars05o: null, //1/2 ounce
    numberOfGoldBars20g: null,
    numberOfGoldBars1o: null,
    numberOfGoldBars50g: null,
    numberOfGoldBars100g: null,
    numberOfGoldBars5o: null,
    numberOfGoldBars250g: null,
    numberOfGoldBars10o: null,
    numberOfGoldBars500g: null,
    numberOfGoldBars1kg: null,
    numberOfGoldBars125kg: null, //12,5kg
}

const summarySilver = {
    numberOfSilverCoins: null,

    numberOfSilverBars1g: null,
    numberOfSilverBars25g: null, //2,5gr
    numberOfSilverBars5g: null,
    numberOfSilverBars10g: null,
    numberOfSilverBars05o: null, //1/2 ounce
    numberOfSilverBars20g: null,
    numberOfSilverBars1o: null,
    numberOfSilverBars50g: null,
    numberOfSilverBars100g: null,
    numberOfSilverBars5o: null,
    numberOfSilverBars250g: null,
    numberOfSilverBars10o: null,
    numberOfSilverBars500g: null,
    numberOfSilverBars1kg: null,
    numberOfSilverBars125kg: null, //12,5kg
}

const summaryPlatinum = {
    numberOfPlatinumCoins: null,

    numberOfPlatinumBars1g: null,
    numberOfPlatinumBars25g: null, //2,5gr
    numberOfPlatinumBars5g: null,
    numberOfPlatinumBars10g: null,
    numberOfPlatinumBars05o: null, //1/2 ounce
    numberOfPlatinumBars20g: null,
    numberOfPlatinumBars1o: null,
    numberOfPlatinumBars50g: null,
    numberOfPlatinumBars100g: null,
    numberOfPlatinumBars5o: null,
    numberOfPlatinumBars250g: null,
    numberOfPlatinumBars10o: null,
    numberOfPlatinumBars500g: null,
    numberOfPlatinumBars1kg: null,
    numberOfPlatinumBars125kg: null, //12,5kg
}

const summaryPalladium = {
    numberOfPalladiumCoins: null,

    numberOfPalladiumBars1g: null,
    numberOfPalladiumBars25g: null, //2,5gr
    numberOfPalladiumBars5g: null,
    numberOfPalladiumBars10g: null,
    numberOfPalladiumBars05o: null, //1/2 ounce
    numberOfPalladiumBars20g: null,
    numberOfPalladiumBars1o: null,
    numberOfPalladiumBars50g: null,
    numberOfPalladiumBars100g: null,
    numberOfPalladiumBars5o: null,
    numberOfPalladiumBars250g: null,
    numberOfPalladiumBars10o: null,
    numberOfPalladiumBars500g: null,
    numberOfPalladiumBars1kg: null,
    numberOfPalladiumBars125kg: null, //12,5kg
}

export {
    assets,
    purchases,
    purchase,
    singleAsset,
    dimensionType,
    picture,
    summary,
    summaryGold,
    summarySilver,
    summaryPlatinum,
    summaryPalladium,
};