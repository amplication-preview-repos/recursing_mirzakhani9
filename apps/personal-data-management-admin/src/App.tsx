import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { DataRequestList } from "./dataRequest/DataRequestList";
import { DataRequestCreate } from "./dataRequest/DataRequestCreate";
import { DataRequestEdit } from "./dataRequest/DataRequestEdit";
import { DataRequestShow } from "./dataRequest/DataRequestShow";
import { DataUploadList } from "./dataUpload/DataUploadList";
import { DataUploadCreate } from "./dataUpload/DataUploadCreate";
import { DataUploadEdit } from "./dataUpload/DataUploadEdit";
import { DataUploadShow } from "./dataUpload/DataUploadShow";
import { CommunicationList } from "./communication/CommunicationList";
import { CommunicationCreate } from "./communication/CommunicationCreate";
import { CommunicationEdit } from "./communication/CommunicationEdit";
import { CommunicationShow } from "./communication/CommunicationShow";
import { PrivacyAgreementList } from "./privacyAgreement/PrivacyAgreementList";
import { PrivacyAgreementCreate } from "./privacyAgreement/PrivacyAgreementCreate";
import { PrivacyAgreementEdit } from "./privacyAgreement/PrivacyAgreementEdit";
import { PrivacyAgreementShow } from "./privacyAgreement/PrivacyAgreementShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Personal Data Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="DataRequest"
          list={DataRequestList}
          edit={DataRequestEdit}
          create={DataRequestCreate}
          show={DataRequestShow}
        />
        <Resource
          name="DataUpload"
          list={DataUploadList}
          edit={DataUploadEdit}
          create={DataUploadCreate}
          show={DataUploadShow}
        />
        <Resource
          name="Communication"
          list={CommunicationList}
          edit={CommunicationEdit}
          create={CommunicationCreate}
          show={CommunicationShow}
        />
        <Resource
          name="PrivacyAgreement"
          list={PrivacyAgreementList}
          edit={PrivacyAgreementEdit}
          create={PrivacyAgreementCreate}
          show={PrivacyAgreementShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
