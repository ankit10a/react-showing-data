import React, { Component } from "react";

class DispStu extends Component {
  state = {
    secA: [
      { roll: 1, sec: "A", name: "Jack", maths: 67, eng: 71, comp: 61 },
      { roll: 2, sec: "A", name: "Mary", maths: 79, eng: 74, comp: 51 },
      { roll: 3, sec: "A", name: "Steve", maths: 61, eng: 78, comp: 46 },
      { roll: 4, sec: "A", name: "Bob", maths: 75, eng: 67, comp: 68 },
      { roll: 5, sec: "A", name: "Kathy", maths: 70, eng: 63, comp: 74 },
      { roll: 6, sec: "A", name: "Meg", maths: 46, eng: 61, comp: 63 },
      { roll: 7, sec: "A", name: "Tom", maths: 72, eng: 85, comp: 65 },
      { roll: 8, sec: "A", name: "David", maths: 85, eng: 71, comp: 85 }
    ],
    secB: [
      { roll: 1, sec: "B", name: "Arthur", maths: 67, eng: 55, comp: 78 },
      { roll: 2, sec: "B", name: "Kevin", maths: 69, eng: 64, comp: 68 },
      { roll: 3, sec: "B", name: "Harry", maths: 61, eng: 88, comp: 80 },
      { roll: 4, sec: "B", name: "Martin", maths: 65, eng: 60, comp: 48 },
      { roll: 5, sec: "B", name: "Pam", maths: 80, eng: 53, comp: 54 },
      { roll: 6, sec: "B", name: "Nicky", maths: 76, eng: 71, comp: 83 },
      { roll: 7, sec: "B", name: "Robert", maths: 82, eng: 65, comp: 75 },
      { roll: 8, sec: "B", name: "Susan", maths: 65, eng: 81, comp: 50 }
    ],
    click: -1,
    section: [
      "Section A - Sorted by Total ",
      "Section B - Sorted by Total",
      "All Sections - Sorted by Total",
      "Section A - Sorted by Name ",
      "Section B - Sorted by Name",
      "All Sections - Sorted by Name"
    ]
  };
  handleEvent = val => {
    {
      this.setState({ click: val });
    }
  };
  show = () => {
    let comb = [...this.state.secA, ...this.state.secB];
    let infoA = [...this.state.secA];
    let infoB = [...this.state.secB];
    switch (this.state.click) {
      case 1:
        return infoA.sort(this.srttotal);
      case 2:
        return infoB.sort(this.srttotal);
      case 3:
        return comb.sort(this.srttotal);
      case 4:
        return infoA.sort(this.srtNm);
      case 5:
        return infoB.sort(this.srtNm);
      case 6:
        return comb.sort(this.srtNm);
      default:
        return this.state.comb;
    }
  };
  srttotal(t1, t2) {
    return t2.maths + t2.eng + t2.comp - (t1.maths + t1.eng + t1.comp);
  }
  srtNm(n1, n2) {
    return n1.name.localeCompare(n2.name);
  }
  render() {
    let stuinfo = this.show();
    console.log(stuinfo);
    return (
      <div className="container">
        <button
          className="btn btn-primary m-4"
          onClick={() => this.handleEvent(1)}
        >
          SecA by Total
        </button>
        <button
          className="btn btn-primary m-4"
          onClick={() => this.handleEvent(2)}
        >
          SecB by Total
        </button>
        <button
          className="btn btn-primary m-4"
          onClick={() => this.handleEvent(3)}
        >
          All Sec by Total
        </button>
        <button
          className="btn btn-primary m-4"
          onClick={() => this.handleEvent(4)}
        >
          SecA by Name
        </button>
        <button
          className="btn btn-primary m-4"
          onClick={() => this.handleEvent(5)}
        >
          SecB by Name
        </button>
        <button
          className="btn btn-primary m-4"
          onClick={() => this.handleEvent(6)}
        >
          All Sec by Name
        </button>
        {this.state.click < 0 ? (
          ""
        ) : (
          <div>
            {" "}
            <h5 className="text-center">
              Performance Report for {this.state.section[this.state.click - 1]}
            </h5>
            <div className="row text-white text-center">
              <div className="col-1 bg-dark border">RollNo</div>
              <div className="col-1 bg-dark border">Section</div>
              <div className="col-2 bg-dark border">Name</div>
              <div className="col-2 bg-dark border">Maths</div>
              <div className="col-2 bg-dark border">English</div>
              <div className="col-2 bg-dark border">Computers</div>
              <div className="col-2 bg-dark border">Total</div>
            </div>
            {stuinfo.map(n => (
              <div className="row text-center">
                <div className="col-1 border">{n.roll}</div>
                <div className="col-1 border">{n.sec}</div>
                <div className="col-2 border">{n.name}</div>
                <div className="col-2 border">{n.maths}</div>
                <div className="col-2 border">{n.eng}</div>
                <div className="col-2 border">{n.comp}</div>
                <div className="col-2 border">{n.maths + n.eng + n.comp}</div>
              </div>
            ))}
          </div>
        )}
        <br />
      </div>
    );
  }
}

export default DispStu;
