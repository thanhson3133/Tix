import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { SearchUser } from "../../../../redux/actions/searchUser";
import { fetchUserList } from "../../../../redux/actions/userList";

class index extends PureComponent {
   handleChangeSearch = (e) => {
      console.log(e.target.value);
      const { value } = e.target;
      if (value) {
         this.props.dispatch(SearchUser(e.target.value));
      } else {
         this.props.dispatch(fetchUserList());
      }
   };
   render() {
      return (
         <div className="input-group mb-3 w-50">
            <input
               type="text"
               className="form-control"
               placeholder="Search"
               onChange={this.handleChangeSearch}
            />
         </div>
      );
   }
}
export default connect()(index);
