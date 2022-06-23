import React from 'react';
import карта from "./карта.png"
import карта1 from "./карта1.png"

function Address(props) {
    return (
        <div className='container'>
            <h1 className='text-center m-3'>Ак тулпар</h1>
            <div className='d-flex text-center m-5'>
                <div className='m-3 p-3 text-center' style={{ backgroundColor: "rgb(235 239 246)", borderRadius: "30px" }}>
                    <h2>Адрес</h2>
                    <h3>Ош, с. Дыйкан-Кыштак, 2-я, 4а</h3>


                </div>

                <div className='m-3 p-3 text-center' style={{ backgroundColor: "rgb(235 239 246)", borderRadius: "30px" }}>
                    <h3>
                        ТЕЛЕФОН<br />
                        ✆ +996 771‒600‒600<br />
                        ✆ +996 702‒183‒700
                    </h3>

                </div>
            </div>
            <img width={"100%"} src={карта} />
            <img width={"100%"} src={карта1} />
            <div >
                <h1 className='text-center m-4'> Ак тулпар спорт комплекси</h1>
                <h6>Ак тулпар, спорт комплекси каталогдун төмөнкү бөлүмдөрүндө көрсөтүлгөн: Спорт залдары; Спорт секциялары; Фитнес клубдары. Дарек, байланыштар жана башка маалыматтар 2021-10-02 боюнча учурдагы. Бул жерге жеке зыярат кылуу үчүн бул жерге барышыңыз керек: Ош облусу, Ош, 22-б. Дыйкан-Кыштак, 2, 4а. Иш күндөрү: дүйшөмбү, шейшемби, шаршемби, бейшемби, жума, ишемби, жумуш убактысы жогоруда "Жумуш убактысы" блогунда келтирилген. Ак тулпар, спорт комплексинин баракчасы 238 жолу көрүлгөн</h6>
            </div>
        </div>
    );
}

export default Address;