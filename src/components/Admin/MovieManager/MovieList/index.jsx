import React, { PureComponent } from "react";
import { connect } from "react-redux";

import MovieItem from "../MovieItem";

class index extends PureComponent {
   constructor() {
      super();
      this.state = {
         currentPage: 1,
         usersPerPage: 10,
      };
   }
   chosePage = (event) => {
      // console.log("state:", this.state.currentPage);

      this.setState({
         currentPage: Number(event.target.id),
      });
   };
   chosePageNextPrev = (ps) => {
      if (ps === "next") {
         this.setState({
            currentPage: this.state.currentPage + 1,
         });
      } else {
         this.setState({
            currentPage: this.state.currentPage - 1,
         });
      }
   };

   select = (event) => {
      this.setState({
         usersPerPage: event.target.value,
      });
   };

   render() {
      const currentPage = this.state.currentPage;
      const usersPerPage = this.state.usersPerPage;
      const indexOfLastNews = currentPage * usersPerPage;
      const indexOfFirstNews = indexOfLastNews - usersPerPage;

      const currentTodos = this.props.item.slice(
         indexOfFirstNews,
         indexOfLastNews
      );

      const renderTodos = () => {
         // console.log("currentTodos", currentTodos);

         return currentTodos.map((item, index) => {
            return (
               <MovieItem
                  stt={index + 1 + (currentPage - 1) * usersPerPage}
                  key={index}
                  data={item}
               />
            );
         });
      };

      const pageNumbers = [];
      for (
         let i = 1;
         i <= Math.ceil(this.props.item.length / usersPerPage);
         i++
      ) {
         pageNumbers.push(i);
      }
      return (
         <div className="">
            <table className="table table-hover text-center">
               <thead>
                  <tr className="table-active">
                     <th scope="col">Mã phim</th>
                     <th scope="col">Tên phim</th>
                     <th scope="col">Trailer</th>
                     <th scope="col">Hình Ảnh</th>

                     <th scope="col">Đánh giá</th>
                     <th scope="col">Mô tả</th>
                     <th scope="col">Ngày khởi chiếu</th>
                     <th scope="col">Hành động</th>
                  </tr>
               </thead>
               <tbody>{renderTodos()}</tbody>
            </table>
            <div className="table-responsive">
               <ul className="pagination justify-content-center">
                  {this.state.currentPage === 1 ? (
                     <li className={`page-item disabled`}>
                        <button
                           className="page-link"
                           tabIndex={-1}
                           aria-disabled="true"
                        >
                           Previous
                        </button>
                     </li>
                  ) : (
                     <li
                        className={`page-item`}
                        onClick={() => {
                           this.chosePageNextPrev("prev");
                        }}
                     >
                        <button
                           className="page-link"
                           tabIndex={-1}
                           aria-disabled="true"
                        >
                           Previous
                        </button>
                     </li>
                  )}
                  {pageNumbers.map((number) => {
                     return this.state.currentPage === number ? (
                        <li
                           onClick={this.chosePage}
                           key={number}
                           id={number}
                           className="page-item active"
                        >
                           <button
                              id={number}
                              onClick={this.chosePage}
                              className="page-link"
                           >
                              {number}
                           </button>
                        </li>
                     ) : (
                        <li
                           className="page-item"
                           key={number}
                           id={number}
                           onClick={this.chosePage}
                        >
                           <button
                              id={number}
                              onClick={this.chosePage}
                              className="page-link"
                           >
                              {number}
                           </button>
                        </li>
                     );
                  })}

                  {this.state.currentPage >
                  this.props.item.length / usersPerPage ? (
                     <li className={`page-item disabled`}>
                        <button className="page-link">Next</button>
                     </li>
                  ) : (
                     <li
                        className={`page-item`}
                        onClick={() => {
                           this.chosePageNextPrev("next");
                        }}
                     >
                        <button className="page-link">Next</button>
                     </li>
                  )}
               </ul>
            </div>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      userListItem: state.userManager.userListItem,
   };
};

export default connect(mapStateToProps)(index);
