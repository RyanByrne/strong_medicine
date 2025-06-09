import { AssociationLogo } from '@/components/ui/OptimizedImage'

export default function Associations() {
  const associations = [
    {
      name: "Institute for Functional Medicine",
      description: "Certified Functional Medicine Practitioner",
      logo: "IFM"
    },
    {
      name: "American Board of Internal Medicine", 
      description: "Board Certified Internal Medicine",
      logo: "ABIM"
    },
    {
      name: "American College of Lifestyle Medicine",
      description: "Lifestyle Medicine Certification",
      logo: "ACLM"
    },
    {
      name: "International Coach Federation",
      description: "Certified Health & Wellness Coach",
      logo: "ICF"
    },
    {
      name: "American Heart Association",
      description: "Advanced Cardiac Life Support",
      logo: "AHA"
    },
    {
      name: "Precision Medicine Institute",
      description: "Genomics & Personalized Medicine",
      logo: "PMI"
    }
  ]

  return (
    <section className="section-padding bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-6">
            🏆 Trusted & Certified
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recognized by Leading Medical Organizations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our practitioners maintain the highest standards through continuous education and certification 
            with premier medical and wellness organizations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {associations.map((association, index) => (
            <div key={association.name} className="text-center group">
              {/* Association logo */}
              <div className="w-24 h-20 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center group-hover:bg-accent/5 transition-all duration-300 shadow-sm group-hover:shadow-md border border-gray-100">
                <AssociationLogo 
                  name={association.name} 
                  width={80} 
                  height={40}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1 leading-tight">
                {association.name}
              </h3>
              <p className="text-xs text-gray-500 leading-tight">
                {association.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional credentials */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-accent mb-2">15+ Years</div>
              <div className="text-gray-600">Clinical Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-2">Board Certified</div>
              <div className="text-gray-600">Internal Medicine</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-2">1000+ Patients</div>
              <div className="text-gray-600">Successfully Treated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}