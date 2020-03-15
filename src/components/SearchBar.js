import React from 'react';


class SearchBar extends React.Component {

  onInputChange(event) {
    console.log(event.target.value);
  }

  // can use this for on click event
  // onInputClick(event) {
  //   console.log('Input is clicked');
  // }


  render (){
    // we are not going to add () to this.onInputChange as if we didi this that will call on render but we dont want on render, we want it on change of input
    // we can write onChange event like onChange={(event) => console.log('foo')}
    return(
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label className="">Image Search</label>
              <input
                type="text"
                onChange={this.onInputChange}
              />
          </div>
        </form>
      </div>
    );
 }

}

export default SearchBar