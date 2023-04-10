


function Admin(){
    return(
        <div className='content-container-admin'>
            <h1>ПАНЕЛЬ АДМІНІСТРАТОРА</h1>
            <div>
                <h3>Форма додавання товару на сайт</h3>
                <form className='admin-block'>
                    <div className='admin-block-option'>
                        <p>Вид товару</p>
                        <div><input type='radio' id='3К' name='typeGoods'/><label htmlFor='3К'>Фотокамера</label></div>
                        <div><input type='radio' id='4К' name='typeGoods'/><label htmlFor='4К'>Лінза</label></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Марка</p>
                        <div><input type='text' size='20'  name='brand'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Модель</p>
                        <div><input type='text' size='40' name='model'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Тип зображення</p>
                        <div><input type='radio' id='type1' name='type'/><label htmlFor='type1'>Дзеркальна</label></div>
                        <div><input type='radio' id='type2' name='type'/><label htmlFor='type2'>Компактна</label></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Матриця</p>
                        <div><input type='text'  name='matrix'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Роздільна здатність, Mpx</p>
                        <div><input type='text'  name='mpx'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Якість відео</p>
                        <div><input type='text'  name='video'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Експокорекція</p>
                        <div><input type='text'  size='40' name='expo'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Ширина, мм</p>
                        <div><input type='number'  min='1' name='width'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Висота, мм</p>
                        <div><input type='number' min='1' name='height'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Глибина, мм</p>
                        <div><input type='number' min='1' name='depth'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Вага, г</p>
                        <div><input type='number'  min='1' name='weight'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Ціна будній день, грн</p>
                        <div><input type='number'  min='1' name='work-price'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Ціна вихідний день, грн</p>
                        <div><input type='number'  min='1' name='weekend-price'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Ціна за тиждень день, грн</p>
                        <div><input type='number' i min='1' name='week-price'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Ціна за місяць день, грн</p>
                        <div><input type='number'  min='1' name='month-price'/></div>
                    </div>
                    <div className='admin-block-option'>
                        <p>Наявність</p>
                        <div><input type='radio' id='available1' name='availability'/><label htmlFor='available1'>Так</label></div>
                        <div><input type='radio' id='available2' name='availability'/><label htmlFor='available2'>Ні</label></div>
                    </div>
                    {/* <div className='admin-block-option'>
                        <p>Фото</p>
                        <div><input type='file' name='img1'/></div>
                        <div><input type='file' name='img2'/></div>
                        <div><input type='file' name='img3'/></div>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default Admin