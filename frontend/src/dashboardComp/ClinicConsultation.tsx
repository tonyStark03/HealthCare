import {CCard,CCardBody,CCardImage,CCardTitle,CCardText}  from '@coreui/react';
import spDentist from "../assets/spDentist.jpg"
import { ClinicConsultationInterface } from '../interface';
export default function ClinicConsultation(){
    return(
        <>
            <div className="h-full mx-auto w-[74rem]">
            <h2 className="text-2xl font-semibold opacity-80 ">Book an appointment for an in-clinic consultation</h2>
                <div className="text-base opacity-80">Find experienced doctors across all specialties</div>
                <div className="flex mt-5"  >
                    <Card img={spDentist} title="Dentist" text="Teething troubles? Schedule a dental checkup"/>
                    <Card img={spDentist} title="Dentist" text="health practices and achieve your goals."/>
                    <Card img={spDentist} title="Dentist" text="Health articles that keep you informed about good health practices and achieve your goals."/>
                    <Card img={spDentist} title="Dentist" text="Health articles that keep you informed about good health practices and achieve your goals."/>
                </div>
            </div>
        </>
    )
}

function Card({img, title, text}:ClinicConsultationInterface){
    return(
        <>
            <CCard className='mr-5 w-[280px] h-[270px]'>
                <CCardImage src={img} className='w-[280px] h-[200px] rounded-md'/>
                <CCardBody>
                    <CCardTitle className='mt-3 text-md font-semibold'>
                        {title}
                    </CCardTitle>
                        <CCardText className='text-sm'>
                                {text}
                        </CCardText>
                </CCardBody>
            </CCard>
        </>
    )
}