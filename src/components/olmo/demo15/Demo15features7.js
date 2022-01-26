const FeatureBox = ({ color, description, svg }) => (
  
  <div id="fb-7-1" style={{borderColor:color}} className="fbox-7 mt-40 mb-30 wow fadeInUp">
  {/* Icon */}
  <div style={{width:90,height:90,backgroundColor:color,borderRadius:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
    <span >
{svg}

    </span>
  </div>
  {/* Title */}

  {/* Text */}
  <h5 className="h5-sm grey-text capitalize" style={{fontWeight:400}}>
    {description}
  </h5>
</div>
      )


const Demo15features7 = () => {
  return (
    <section id="features-7" className="wide-70 features-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* FEATURES-7 WRAPPER */}
          <div className="col-lg-7 order-last order-lg-2">
            <div className="fbox-7-wrapper pr-30">
              <div className="row">
                <div className="col-md-6">
                  {/* FEATURE BOX #1 */}
        <FeatureBox 
  color={'#00AB78'}
        svg={   <svg width="31" height="35" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4651 3.22086C12.1081 3.22086 11.7787 3.41236 11.602 3.7225L4.41736 16.3337C3.46498 18.0054 3.06532 19.9354 3.27548 21.8479L4.03376 28.7484C4.16867 29.9761 5.13251 30.9486 6.35901 31.0945L10.9048 31.6353C13.9057 31.9923 16.9484 31.6828 19.816 30.729C21.2322 30.258 22.3665 29.1831 22.913 27.7943L26.5721 18.4955C26.6616 18.2682 26.7234 18.0309 26.7563 17.7888C27.0338 15.7444 25.2441 14.0199 23.2114 14.3729L15.8768 15.6468C13.56 16.0492 11.5589 14.0046 12.0111 11.697L13.4399 4.40523C13.5601 3.79162 13.0904 3.22085 12.4651 3.22086ZM8.8034 2.12815C9.55296 0.812432 10.9508 1.35666e-05 12.465 1.75517e-10C15.1177 -2.38051e-05 17.1107 2.42139 16.6007 5.02456L15.1719 12.3163C15.1657 12.3475 15.169 12.3666 15.1733 12.3803C15.1786 12.3972 15.1895 12.417 15.2075 12.4353C15.2254 12.4536 15.2449 12.4649 15.2617 12.4706C15.2753 12.4752 15.2943 12.4789 15.3257 12.4735L22.6602 11.1996C26.8392 10.4737 30.5184 14.0191 29.9479 18.2221C29.8803 18.7198 29.7532 19.2075 29.5693 19.6749L25.9102 28.9737C25.0142 31.2507 23.1544 33.013 20.8326 33.7853C17.5154 34.8886 13.9957 35.2465 10.5244 34.8336L5.97855 34.2929C3.26399 33.9699 1.13077 31.8175 0.832171 29.1002L0.0738891 22.1997C-0.210438 19.6122 0.330277 17.0011 1.61878 14.7394L8.8034 2.12815Z" fill="white"/>
        </svg>}
        description={"Convenient and flexible to suit your lifestyle and needs"}
        />
                  {/* FEATURE BOX #2 */}

            <FeatureBox 
  color={'#F78171'}
        svg={<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.667 25.3346L25.3337 13.668" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6392 15.6124C15.1762 15.6124 15.6114 15.1771 15.6114 14.6402C15.6114 14.1032 15.1762 13.668 14.6392 13.668C14.1023 13.668 13.667 14.1032 13.667 14.6402C13.667 15.1771 14.1023 15.6124 14.6392 15.6124Z" fill="white" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.3609 25.3351C24.8978 25.3351 25.3331 24.8998 25.3331 24.3628C25.3331 23.8259 24.8978 23.3906 24.3609 23.3906C23.824 23.3906 23.3887 23.8259 23.3887 24.3628C23.3887 24.8998 23.824 25.3351 24.3609 25.3351Z" fill="white" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.5 37C29.165 37 37 29.165 37 19.5C37 9.83502 29.165 2 19.5 2C9.83502 2 2 9.83502 2 19.5C2 29.165 9.83502 37 19.5 37Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        }
        description={"More affordable dental care and product discounts"}
        />
                </div>
                <div className="col-md-6">
                  {/* FEATURE BOX #3 */}
                  <FeatureBox 
  color={'#F7A312'}
        svg={  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 0C27.165 0 35 7.83502 35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5C0 7.83502 7.83502 0 17.5 0ZM17.5 3.5C9.76801 3.5 3.5 9.76801 3.5 17.5C3.5 25.232 9.76801 31.5 17.5 31.5C25.232 31.5 31.5 25.232 31.5 17.5C31.5 9.76801 25.232 3.5 17.5 3.5ZM17.5 7C18.3975 7 19.1371 7.67557 19.2382 8.54591L19.25 8.75V16.7751L22.2374 19.7626C22.9209 20.446 22.9209 21.554 22.2374 22.2374C21.6066 22.8683 20.6139 22.9168 19.9274 22.383L19.7626 22.2374L16.2626 18.7374C15.9891 18.4639 15.8155 18.1093 15.7652 17.73L15.75 17.5V8.75C15.75 7.7835 16.5335 7 17.5 7Z" fill="white"/>
        </svg>
        }
        description={"Instant access to an online dentist 24/7/365"}
        />
                  {/* FEATURE BOX #4 */}
                  <FeatureBox 
  color={'#72B6CD'}
        svg={  <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8138 2.81649L25.0818 11.4155C25.2935 11.8494 25.7047 12.1504 26.1825 12.2222L35.7334 13.6063C36.1201 13.6571 36.4701 13.8618 36.7063 14.1733C37.1508 14.7525 37.0843 15.5785 36.5506 16.0789L29.6315 22.7985C29.2815 23.1258 29.124 23.6122 29.215 24.0812L30.8827 33.5534C30.9982 34.3408 30.4644 35.0723 29.6822 35.2018C29.3568 35.2525 29.0243 35.2 28.7321 35.0531L20.2136 30.5891C19.7866 30.3563 19.2721 30.3563 18.8469 30.5891L10.2724 35.0845C9.5567 35.445 8.68876 35.1738 8.30028 34.4773C8.15154 34.1956 8.09729 33.8701 8.14979 33.5534L9.81744 24.0812C9.89793 23.6122 9.74219 23.131 9.40096 22.7985L2.42763 16.0772C1.85892 15.5102 1.85717 14.5898 2.42413 14.0193C2.42588 14.0193 2.42588 14.0176 2.42763 14.0158C2.66037 13.8041 2.9491 13.6606 3.26058 13.6063L12.8115 12.2222C13.2857 12.1452 13.697 11.8442 13.9122 11.4155L18.1802 2.81649C18.3499 2.46651 18.6544 2.19878 19.0236 2.07628C19.3929 1.95204 19.7971 1.98004 20.1471 2.15678C20.4341 2.30027 20.6668 2.53126 20.8138 2.81649Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        }
        description={"High quality care from top dentists"}
        />
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FEATURES-7 WRAPPER */}
          {/* TEXT BLOCK */}
          <div className="col-md-12 col-lg-5 order-first order-lg-2">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Section ID */}
            
              {/* Title */}
              <h2 className="h2-xs capitalize">What are the benefits?</h2>
              {/* Text */}
           
              {/* Text */}
            
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo15features7;
