import { useState } from "react";
import { Button, Table, ButtonGroup } from "react-bootstrap";
import AddModal from "../components/AddModal";
import { removeTask } from "../App/crudSlice";
import { useSelector, useDispatch } from "react-redux";
const CrudPage = () => {
  const [showModal, setShowModal] = useState(false);
  const state = useSelector((store) => store.crudReducer);
  //düzenlenecek eleman başlangıç değeri null
  //modala eğer null gönderilirse modal bunu farkedecek ve ekleme işlemi yapsın
  //düzenle butona tıklanır ve state in içerisine değer atanırsa ozaman modal
  //gönderilince modal bunu tespit eder ve düzenleme işlemi yapar.
  const [editTask, setEditTask] = useState(null);

  const dispatch = useDispatch();
  const handleClose = () => {
    setEditTask(null);
    // modal'ı kapat
    setShowModal(false);
  };

  return (
    <div className="m-2">
      <AddModal
        show={showModal}
        handleClose={handleClose}
        editTask={editTask}
      />
      <Button
        variant="success"
        className="my-3"
        onClick={() => setShowModal(true)}
      >
        yeni Eleman Ekle
      </Button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Kitap Adı</th>
            <th>Yazar Adı</th>
            <th>Alıcı</th>
            <th>Tarih</th>
            <th>işlemler</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task) => (
            <tr>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup>
                  <Button
                    onClick={() => dispatch(removeTask(task))}
                    variant="danger"
                  >
                    sil
                  </Button>
                  <Button
                    onClick={() => {
                      //tıklanıldığında state tasks mı atıcak yani düzenlenecek elemanı
                      //daha sonra modale açıcak
                      setEditTask(task);
                      setShowModal(true);
                    }}
                  >
                    Düzenle
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
