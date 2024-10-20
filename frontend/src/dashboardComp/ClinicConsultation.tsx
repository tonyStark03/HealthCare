import {CCard,CCardBody,CCardImage,CCardTitle,CCardText}  from '@coreui/react';
import spDentist from "../assets/spDentist.jpg"
export default function ClinicConsultation(){
    return(
        <>
            <div className="h-full mx-auto w-[73rem]">
            <h2 className="text-2xl font-semibold opacity-80 ">Book an appointment for an in-clinic consultation</h2>
                <div className="text-base opacity-80">Find experienced doctors across all specialties</div>
                <div className="h-[270px] mt-4">
                    <Card img={spDentist}/>
                </div>
            </div>
        </>
    )
}

function Card({img}){
    return(
        <>
            <CCard>
                <CCardImage src={img} className='w-[280px] h-[200px]'/>
                <CCardBody>
                    <CCardTitle>
                        Dentist
                    </CCardTitle>
                        <CCardText>
                                dghbs gfdsfhsd  gfidsgf
                        </CCardText>
                </CCardBody>
            </CCard>
        </>
    )
}