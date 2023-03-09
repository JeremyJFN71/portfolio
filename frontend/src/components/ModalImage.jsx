export default function ModalImage(props) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <img src={props.image} alt="" style={{maxHeight: '100vh'}} />
                </div>
            </div>
        </div>
    )
}
