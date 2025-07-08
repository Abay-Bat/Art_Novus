import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline pt-4 sm:pt-2 mb-6 text-center text-n-1 opacity-50">
        Качество — по разумной цене.
      </h5>
    </div>
  );
};

export default CompanyLogos;
