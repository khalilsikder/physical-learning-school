import img from '../../../assets/phyIns.jpg'
import img2 from '../../../assets/phyins2.jpg'
import img3 from '../../../assets/phyins3.jpg'
import img4 from '../../../assets/phyins4.jpg'
import img5 from '../../../assets/phyins5.jpg'
import img6 from '../../../assets/phyins6.jpg'
import SectionTitle from '../../../component/SectionTitle/SectionTitle'

const Instructors = () => {
    return (
        <section>
            <SectionTitle
             subheading={'time to meet instructors'}
             heading={'Instructors'}
            > </SectionTitle>
            <div className='grid md:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Instructor</h2>
                        <p>Instructor is trainning their students</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">Instructor</h2>
                    <p>Instructor is trainning their students</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">Instructor</h2>
                    <p>Instructor is trainning their students</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">Instructor</h2>
                    <p>Instructor is trainning their students</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">Instructor</h2>
                    <p>Instructor is trainning their students</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">Instructor</h2>
                    <p>Instructor is trainning their students</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Instructors;