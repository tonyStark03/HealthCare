import {CCard,CCardBody,CCardImage,CCardTitle,CCardText}  from '@coreui/react';
import imges from '../assets/img.jpg';
import {cardInterface} from '../interface';
import dwebFindDoctors from '../assets/dweb_find_doctors.webp'
import dwebSurgeries from '../assets/dweb_surgeries.png'


function Card({title, text, img, style}:cardInterface){
        return(
            <CCard className='rounded-3xl shadow-lg mr-4 border' style={{ width: '12.5rem', height:'19rem' }}>
            <CCardImage className='h-[11rem]  w-[12.5rem] rounded-t-3xl' style={{backgroundColor:style}} orientation="top" src={img} />
                <CCardBody className='px-4 pt-5'>
                    <CCardTitle className='text-xl font-semibold pb-2'>{title}</CCardTitle>
                        <CCardText className='text-sm font-normal opacity-60'>
                            {text}
                        </CCardText>
                </CCardBody>
            </CCard>
        ) 
    
    
}

function Cards(  ) {
    return(
        <>
        <div className="flex w-[73rem] h-[22rem] mx-auto items-center justify-center mt-16">
            <Card title="Instant Video Consultation" text="Connect within 60 secs" img={imges} style="blue"  />
            <Card title="Find Doctor Near You" text="Confirmed appoinments" img={dwebFindDoctors} style="#8B80F9" />
            <Card title="Surgeries" text="Safe and trusted surgery centers" img={dwebSurgeries} style="#625834"/>
        </div>
        </>
    )
}

export default Cards;