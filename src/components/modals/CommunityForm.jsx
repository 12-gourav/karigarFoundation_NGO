import { Modal } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";

const CommunityForm = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (name === "" || email === "" || phone === "" || msg === "") {
        return toast.error("Please fill all fields");
      }
      setLoading(true);
      toast.success("Thank you and welcome to karigar community");
      setOpen(false)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title={
        <div className="modal_title">
          <h5>Karigar Foundation Community</h5>
        </div>
      }
      centered
      footer={false}
      width={800}
    >
      <div className="community_modal">
        <div className="form_wrap">
          <div className="form_group">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="form_group">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="form_wrap">
          <div className="form_group">
            <label>Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Enter your phone"
            />
          </div>
        </div>
        <div className="form_wrap">
          <div className="form_group">
            <label>Why you join this community?</label>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              type="text"
              placeholder="Enter message..."
            />
          </div>
        </div>
        <button disabled={loading} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default CommunityForm;
