import {CCard,CCardBody,CCardImage,CCardTitle,CCardText}  from '@coreui/react';
import {SpecialitiesInterface} from '../interface'
import irregularpainfulperiod from '../assets/irregular-painful-period.webp'
import Acne from '../assets/Acne.webp'
import mentalWellness from '../assets/mentalWellness.webp'
import topSpecialityPediatric from '../assets/top-speciality-pediatric.svg'
import topSpecialitySexology from '../assets/top-speciality-sexology.svg'
import coughing from '../assets/coughing.webp'
function Specialities(){
    return(
        <>
            <div className="h-full mx-auto w-[73rem]">
                <h2 className="text-2xl font-semibold opacity-80 ">Consult top doctors online for any health concern</h2>
                <div className="m-1 text-sm opacity-80">Private online consultations with verified doctors in all specialists</div>
                <div className="flex mt-5 ">
                    <Card title="Period doubts or Pregnancy" img={irregularpainfulperiod}/>
                    <Card title="Acne, pimple, or skin issues" img={Acne}/>
                    <Card title="Perfomance issue in bed" img={topSpecialitySexology}/>
                    <Card title="Cold, cough or fever" img={coughing}/>
                    <Card title="Child not feeling well" img={topSpecialityPediatric}/>
                    <Card title="Depression or anxiety" img={mentalWellness}/>
                </div>
            </div>
        </>
    )
}

function Card({img, title}:SpecialitiesInterface){
    return(
        <>
            <div className="w-[190px] h-[251px] p-8 mx-2" >
                <CCard>
                    <CCardImage className='rounded-full h-[7.5rem] w-[7.5rem]' orientation="top" src={img}/>
                    <CCardBody className='mt-3 flex flex-col text-center '>

                        <CCardTitle className='text-sm font-semibold opacity-80'>
                            {title}
                        </CCardTitle>
                        <CCardText className='mt-2 text-cyan-500 font-semibold text-[12px]'>CONSULT NOW</CCardText>
                    </CCardBody>
                </CCard>
            </div>
        </>
    )
}

export default Specialities