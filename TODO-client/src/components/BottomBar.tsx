export function BottomBar() {
  return (
    <>
      <div className="bottom-actions-bar-desktop ">
        <h3>5 items left</h3>
        <div className="bottom-navigation">
          <h3>All</h3>
          <h3>Active</h3>
          <h3>Completed</h3>
        </div>
        <h3>Clear Completed</h3>
      </div>
      <div className="bottom-actions-bar-mobile px-2">
        <div className="bottom-actions ">
          <h3>5 items left</h3>
          <h3>Clear Completed</h3>
        </div>
        <div className="bottom-navigation">
          <h3>All</h3>
          <h3>Active</h3>
          <h3>Completed</h3>
        </div>
      </div>
    </>
  );
}
