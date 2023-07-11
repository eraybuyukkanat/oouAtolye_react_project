import './CoursesPage.css'
function CourseItem(props) {
  return (
    <>
      <div class="ag-courses_item">
        <a href="#" class="ag-courses-item_link">
          <div class="ag-courses-item_bg"></div>

          <div class="ag-courses-item_title">
            {props.title}
          </div>

          <div class="ag-courses-item_date-box">
            Süreç: 
            <span class="ag-courses-item_date"> {props.hourInfo}</span>
          </div>
        </a>
      </div>
    </>
  );
}

export default CourseItem;
