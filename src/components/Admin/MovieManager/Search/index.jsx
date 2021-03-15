import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchMoives } from "../../../../redux/actions/movieList";
import { SearchMovie } from "../../../../redux/actions/searchMovie";

class index extends PureComponent {
   handleChangeSearch = (e) => {
      console.log(e.target.value);
      const { value } = e.target;
      if (value) {
         this.props.dispatch(SearchMovie(e.target.value));
      } else {
         this.props.dispatch(fetchMoives());
      }
   };
   render() {
      return (
         <div className="input-group mb-3 w-50">
            <input
               type="text"
               className="form-control"
               placeholder="Nhập tên phim để tìm....."
               onChange={this.handleChangeSearch}
            />
         </div>
      );
   }
}
export default connect()(index);
