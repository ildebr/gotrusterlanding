
const BASE_URL_BACKEND = 'https://truster-bk.herokuapp.com/api/'
const BASE_URL_SERVICE = 'https://service-truster.herokuapp.com/'
const BASE_URL_IMAGE = 'https://truster-bucket.s3.us-west-2.amazonaws.com/images/'

const BaseURLImage = () => {
   return BASE_URL_IMAGE
}

////////////// Account Resource
const Account = () => {
   let REACT_APP_ACCOUNT = BASE_URL_BACKEND + 'account';
   return REACT_APP_ACCOUNT;
}

const AccountChancePass = () => {
   //changePassword
   let REACT_APP_ACCOUNT_CHANCE_PASS = BASE_URL_BACKEND + 'account/change-password';
   return REACT_APP_ACCOUNT_CHANCE_PASS;
}
const AccountResetPass = () => {
   let REACT_APP_ACCOUNT_RESET_PASS = BASE_URL_BACKEND + 'account/reset-password/finish?key=';
   return REACT_APP_ACCOUNT_RESET_PASS;
}
const AccountResetPassEx = () => {
   let REACT_APP_ACCOUNT_RESET_PASS = BASE_URL_BACKEND + 'account/reset-password/finish';
   return REACT_APP_ACCOUNT_RESET_PASS;
}
const AccountEmailPass = () => {
   let REACT_APP_ACCOUNT_EMAIL_PASS = BASE_URL_BACKEND + 'account/reset-password/init';
   return REACT_APP_ACCOUNT_EMAIL_PASS;
}

const AccountActivate = () => {
   let REACT_APP_ACCOUNT_ACTIVATE = BASE_URL_BACKEND + 'activate';
   return REACT_APP_ACCOUNT_ACTIVATE;
}
const AccountAuth = () => {
   let REACT_APP_ACCOUNT_AUTH = BASE_URL_BACKEND + 'authenticate';
   return REACT_APP_ACCOUNT_AUTH;
}
const AccountRegister = () => {
   let REACT_APP_ACCOUNT_REGISTER = BASE_URL_BACKEND + 'register';
   return REACT_APP_ACCOUNT_REGISTER;
}

///////////////Address Resource
const AddressOperations = () => {
   let REACT_APP_ADDRESS_OPERATIONS = BASE_URL_BACKEND + 'addressesByUser';
   return REACT_APP_ADDRESS_OPERATIONS;
}
const AddressOperationsFull = () => {
   let REACT_APP_ADDRESS_OPERATIONS = BASE_URL_BACKEND + 'addresses';
   return REACT_APP_ADDRESS_OPERATIONS;
}
///////////////Customer Resource

const CustomerResource = () => {
   let REACT_APP_COSTUMER_RESOURCE = BASE_URL_BACKEND + 'customers';
   return REACT_APP_COSTUMER_RESOURCE;
}

///////////////User Resource
const UserResource = () => {
   let REACT_APP_USER = BASE_URL_BACKEND + 'users';
   return REACT_APP_USER;
}

// const UserResourceMail = () => {
//    let REACT_APP_USER_MAIL = BASE_URL_BACKEND + ''
// }

///////////////User Admin Resource
const UserAdminResource = () => {
   let REACT_APP_USER_ADMIN = BASE_URL_BACKEND + 'admin/users';
   return REACT_APP_USER_ADMIN;
}

///////////////User Admin Plus Resource
const UserAdminPlusResource = () => {
   let REACT_APP_USER_ADMIN_PLUS = BASE_URL_BACKEND + 'admin/usersPlus';
   return REACT_APP_USER_ADMIN_PLUS;
}
//// admin Customer User
const AdminCustomer = () => {
   let REACT_APP_USER_ADMIN = BASE_URL_BACKEND + 'customersaddress';
   return REACT_APP_USER_ADMIN;
}
//////////////Shop
const ShopsResource = () => {
   let REACT_APP_SHOP = BASE_URL_BACKEND + 'shops';
   return REACT_APP_SHOP;
}
const ShopByCustomer = () => {
   let REACT_APP_SHOP_CUSTOMER = BASE_URL_BACKEND + 'shopsByCustomer';
   return REACT_APP_SHOP_CUSTOMER;
}

const ShopAdress = () => {
   let REACT_APP_ADRESS = BASE_URL_BACKEND + 'shop-addresses';
   return REACT_APP_ADRESS;
}
//////////////Transaction 
const TransactionResource = () => {
   let REACT_APP_Transaction = BASE_URL_BACKEND + 'transactions';
   return REACT_APP_Transaction;
}

/////////////Trust 
const TrustResource = () => {
   let REACT_APP_Trust = BASE_URL_BACKEND + 'trust';
   return REACT_APP_Trust;
}

const UserAuthoritie = () => {
   let REACT_APP_USER_AUTH = BASE_URL_BACKEND + 'users/authorities';
   return REACT_APP_USER_AUTH;
}
const GetImage = () => {
   let REACT_APP_IMG_LOAD = BASE_URL_SERVICE + 'getImages';
   return REACT_APP_IMG_LOAD;
}


///////////////Fiel upload
const Fileload = () => {
   let REACT_APP_FILE_UPLOAD = BASE_URL_SERVICE + 'uploadImage';//para probarlo local hay que poner el localhost
   return REACT_APP_FILE_UPLOAD;
}

const GetJson = () => {
   let REACT_GET_JSON = BASE_URL_SERVICE + 'getJSON';
   return REACT_GET_JSON;
}

/////URI Services

const UriServices = () => {
   let REACT_APP_URI = BASE_URL_SERVICE;//para probarlo local hay que poner el localhost
   return REACT_APP_URI;
}
///// All Category
const AllCategory =()=>{
   let REACT_CATEGORY = BASE_URL_BACKEND + 'category-types';
   return REACT_CATEGORY;
}
const selectSubCategory =()=>{
   let REACT_SUBCATEGORY = BASE_URL_BACKEND + 'subCategoriesByCategory';
   return REACT_SUBCATEGORY;
}
//////////
const loaderServices =()=>{
   let REACT_SERVICES = BASE_URL_SERVICE;
   return REACT_SERVICES;
}
///////////////
const ValidatioDetail = ()=>{
   let REACT_VALIDATION = BASE_URL_BACKEND + 'validation-details' ;
   return REACT_VALIDATION ;
}
///////////////
const ValidatioDetailByCustomer = ()=>{
   let REACT_VALIDATION_BY_CUSTOMER = BASE_URL_BACKEND + 'validationDetailsByCustomer' ;
   return REACT_VALIDATION_BY_CUSTOMER ;
}
const SMSValidations = ()=>{
   let REACT_VALIDATION_SMS = BASE_URL_SERVICE + 'api/messages' ;
   return REACT_VALIDATION_SMS ;
}
////////////////////////
const MeliValidations = ()=>{
   let REACT_VALIDATION_SMS = BASE_URL_BACKEND + 'ml' ;
   return REACT_VALIDATION_SMS ;
}
//////////////////////
const GetUserNames =()=>{
     let USER_NAMES = BASE_URL_BACKEND + 'usersNames' ;
     return USER_NAMES; 
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
      UserAdminResource,
      UserAdminPlusResource,
      UserAuthoritie,
      ShopsResource,
      TransactionResource,
      TrustResource,
      GetImage,
      Fileload,
      AccountResetPassEx,
      AddressOperationsFull,
      UriServices,
      AllCategory,
      selectSubCategory,
      GetJson,
      loaderServices,
      ShopAdress,
      AdminCustomer,
      BaseURLImage,
      ValidatioDetail,
      ValidatioDetailByCustomer,
      ShopByCustomer,
      SMSValidations,
      MeliValidations,
      GetUserNames
   }
