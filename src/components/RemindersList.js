import { useEffect, useRef, useState } from "react";

let timeout;

const initialState = [{ id: 1 }, { id: 2 }];

const getValuesFormControls = ({ first_name, last_name, birthday_date }) => ({
  first_name: first_name?.value,
  last_name: last_name?.value,
  birthday_date: birthday_date?.value,
});

function ReminderForm({ onSubmit }) {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(true);

  const handleCloseDialog = () => setOpen(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = getValuesFormControls(e.target.elements);
    onSubmit(values);
  };

  return (
    <>
      {open && (
        <div open={open} onClose={handleCloseDialog}>
          <div className="">
            <div className="">
              <p className="" variant="h5">
                Add birthday reminder
              </p>
              {/* <IconButton
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
                onClick={handleCloseDialog}
              >
                <CloseIcon />
              </IconButton> */}
            </div>
          </div>
          <div className="">
            <form /*onChange={handleChange} */ onSubmit={handleSubmit}>
              <div className="">
                <div className="">
                  <input className="" name="first_name" label="First Name" />
                </div>
              </div>
              <div className="">
                <div className="">
                  <input className="" name="last_name" label="Last Name" />
                </div>
              </div>
              <div className="">
                <button className="" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <button className="" onClick={handleOpenDialog}>
        {/* <AddIcon /> */}
      </button>
    </>
  );
}

function InputSearchReminder({ setSearch }) {
  const searchRef = useRef();

  const handleChange = (e) => {
    if (timeout) clearTimeout(timeout);
    const { value } = e.target;
    timeout = setTimeout(() => {
      setSearch(value);
    }, 600);
    return e;
  };

  useEffect(() => {
    if (searchRef.current?.value) {
      setSearch(searchRef.current?.value);
    }
    return () => {
      searchRef.current = undefined;
    };
  }, [setSearch]);

  return (
    <div className="">
      <div className="">
        <input className="" />
      </div>
    </div>
  );
}

function ReminderItem({ reminder }) {
  return <div className="">{reminder?.id}</div>;
}

function RemindersLis({ search }) {
  const [reminders, setReminders] = useState(initialState);

  useEffect(() => {
    setReminders(
      initialState.filter((item) => item.id?.toString().includes(search))
    );
  }, [search]);

  return (
    <div>
      {reminders.map((item, i) => (
        <ReminderItem key={item.id} reminder={item} />
      ))}
    </div>
  );
}

function RemindersContain({ children }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="">
        <InputSearchReminder setSearch={setSearch} />
        {children}
      </div>
      <RemindersLis search={search} />
    </>
  );
}

export default function Index() {
  return (
    <RemindersContain>
      <ReminderForm />
    </RemindersContain>
  );
}
