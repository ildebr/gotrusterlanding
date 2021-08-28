////////////// Account Resource
const Account = () => {
   let REACT_APP_ACCOUNT = 'https://truster-back-end.herokuapp.com/api/account';
   return REACT_APP_ACCOUNT;
}

const AccountChancePass = () => {
   //changePassword
   let REACT_APP_ACCOUNT_CHANCE_PASS = 'https://truster-back-end.herokuapp.com/api/account/change-password';
   return REACT_APP_ACCOUNT_CHANCE_PASS;
}
const AccountResetPass = () => {
   let REACT_APP_ACCOUNT_RESET_PASS = 'https://truster-back-end.herokuapp.com/api/account/reset-password/finish?key=';
   return REACT_APP_ACCOUNT_RESET_PASS;
}
const AccountResetPassEx = () => {
   let REACT_APP_ACCOUNT_RESET_PASS = 'https://truster-back-end.herokuapp.com/api/account/reset-password/finish';
   return REACT_APP_ACCOUNT_RESET_PASS;
}
const AccountEmailPass = () => {
   let REACT_APP_ACCOUNT_EMAIL_PASS = 'https://truster-back-end.herokuapp.com/api/account/reset-password/init';
   return REACT_APP_ACCOUNT_EMAIL_PASS;
}

const AccountActivate = () => {
   let REACT_APP_ACCOUNT_ACTIVATE = ' https://truster-back-end.herokuapp.com/api/activate';
   return REACT_APP_ACCOUNT_ACTIVATE;
}
const AccountAuth = () => {
   let REACT_APP_ACCOUNT_AUTH = `https://truster-back-end.herokuapp.com/api/authenticate`;
   return REACT_APP_ACCOUNT_AUTH;
}
const AccountRegister = () => {
   let REACT_APP_ACCOUNT_REGISTER = `https://truster-back-end.herokuapp.com/api/register`;
   return REACT_APP_ACCOUNT_REGISTER;
}

///////////////Address Resource
const AddressOperations = () => {
   let REACT_APP_ADDRESS_OPERATIONS = `https://truster-back-end.herokuapp.com/api/addressesByUser`;
   return REACT_APP_ADDRESS_OPERATIONS;
}
const AddressOperationsFull = () => {
   let REACT_APP_ADDRESS_OPERATIONS = `https://truster-back-end.herokuapp.com/api/addresses`;
   return REACT_APP_ADDRESS_OPERATIONS;
}
///////////////Customer Resource

const CustomerResource = () => {
   let REACT_APP_COSTUMER_RESOURCE = ' https://truster-back-end.herokuapp.com/api/customers';
   return REACT_APP_COSTUMER_RESOURCE;
}

///////////////User Resource
const UserResource = () => {
   let REACT_APP_USER = ' https://truster-back-end.herokuapp.com/api/users';
   return REACT_APP_USER;
}
//////////////Shop
const ShopResource = () => {
   let REACT_APP_SHOP = ' https://truster-back-end.herokuapp.com/api/shop';
   return REACT_APP_SHOP;
}
//////////////Transaction 
const TransactionResource = () => {
   let REACT_APP_Transaction = ' https://truster-back-end.herokuapp.com/api/transactions';
   return REACT_APP_Transaction;
}

/////////////Trust 
const TrustResource = () => {
   let REACT_APP_Trust = ' https://truster-back-end.herokuapp.com/api/trust';
   return REACT_APP_Trust;
}

const UserAuthoritie = () => {
   let REACT_APP_USER_AUTH = ' https://truster-back-end.herokuapp.com/api/users/authorities';
   return REACT_APP_USER_AUTH;
}
const GetImage = () => {
   let REACT_APP_IMG_LOAD = 'https://service-truster.herokuapp.com/getImages';
   return REACT_APP_IMG_LOAD;
}


///////////////Fiel upload
const Fileload = () => {
   let REACT_APP_FILE_UPLOAD = 'https://service-truster.herokuapp.com/uploadImage';//para probarlo local hay que poner el localhost
   return REACT_APP_FILE_UPLOAD;
}
/////URI Services

const UriServices = () => {
   let REACT_APP_URI = 'https://service-truster.herokuapp.com';//para probarlo local hay que poner el localhost
   return REACT_APP_URI;
}
///// All Category
const AllCategory =()=>{
   let REACT_CATEGORY = `https://truster-back-end.herokuapp.com/api/category-types`;
   return REACT_CATEGORY;
}
const AllSubCategory =()=>{
   let REACT_SUBCATEGORY = `https://truster-back-end.herokuapp.com/api/category-types`;
   return REACT_SUBCATEGORY;
}

   module.exports = {
      Account,
      AccountChancePass,
      AccountResetPass,
      AccountEmailPass,
      AccountActivate,
      AccountAuth,
      AccountRegister,
      AddressOperations,
      CustomerResource,
      UserResource,
      UserAuthoritie,
      ShopResource,
      TransactionResource,
      TrustResource,
      GetImage,
      Fileload,
      AccountResetPassEx,
      AddressOperationsFull,
      UriServices,
      AllCategory,
      AllSubCategory
   }


