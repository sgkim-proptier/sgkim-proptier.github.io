import BeforeCertification from './BeforeCertification';
import BrokerCertification from './BrokerCertification';
import RentalBusinessCertification from './RentalBusinessCertification';

export default function Certification() {
  return (
    <>
      <h1>* 부동산 전문가 인증 전 *</h1>
      <BeforeCertification />
      <hr />
      <h1>*중개사업자 인증완료화면*</h1>
      <BrokerCertification />
      <hr />
      <h1>*임대사업자 인증완료확인*</h1>
      <RentalBusinessCertification />
      <hr />
    </>
  );
}
