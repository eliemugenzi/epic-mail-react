import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { toggleSlide } from "../../redux/actions/ui.actions";
class Sidebar extends Component {
  handleClose = () => {
    this.props.toggleSlide();
  };
  render() {
    let asideClasses = "aside";
    if (this.props.ui.sidebarOpen) {
      asideClasses += " open";
    }
    return (
      <aside className={asideClasses}>
        <div className="aside__header">
          <div className="logo">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADUANQDASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAEHBggCAwUE/8QASRAAAQMCAwMEDAsIAgIDAAAAAQACAwQFBhEhEjFBE1JxlAcVFyIyQlFVgZHS4hQ2VGF0k6GxstPwIyQzQ1NykrOiwTThJWPR/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEEBQMC/8QAJREAAgIBBAICAwEBAAAAAAAAAAECAxEEEhQxIlEhYRMyM0FC/9oADAMBAAIRAxEAPwC20RQgJREQBEUICUREARQpQBEUICUREARFCAlERAEUKUARFCAlERAERQgJREQBEXCSSOJkksr2RxxtL5HyODWMa0ZlznO0ACA5osDu/ZLsVE58VthkuMrSQZGu5Clz3aSOaXH0My+dYrP2TsVSH9jBbIG56AQyyOy+dz5MvsCsR09kvnBxlfCPxkuZQqT7pOMufb+qe+ndJxjz7f1T3164lh45MC7UVJd0nGXPt/VPfTuk4x59v6p76cSwcmsuxSqS7pOMefb+qe+ndJxlz7f1T304lg5NZdqhUn3ScY8+39U99O6TjHn2/qnvpxLByay7UVJd0nGPPt/VPfTuk4x59v6p76cSwcmsu1QqT7pOMefb+qe+ndJxjz7f1T304lg5NZdqKku6TjHn2/qnvp3ScZc+39U99OJYOTWXYpVJd0nGPPt/VPfTuk4y59v6p76cSwcmsu1QqT7pOMefb+qe+ndJxjz7f1T304lg5NZdqKkx2ScYggl1vPzGkOvqkXq0PZUrmuAuVrp5WHIF9DI+F7RxOxMXNP8AkFD0tiJWogy10XjWXEthvzCbfVAzNbtS00w5OpjG7N0ZOo+cEj517KrtOLwzumn8oIiKCTpqammo6eoqqmVsVPTxvlmkee9YxozJOWqo3FeLq7EU74ozJBaYn/u9Nnk6XI6TVOWhceA3D5z3zsm7J18eX0lggeQwMZWXDZPhOJ/YxO6Mi8j52+RVktHS0rG9lDUWvOxBERXymEUtZK/MsjleBkCY43vAJ3Z7IK5cjUfJ6n6ib2VGUTtb/wAOCLnyNR8nqfqJvZTkaj5PU/UTeymUNsvRwRc+RqPk9T9RN7KcjUfJ6n6ib2Uyhtl6OCLnyNR8nqfqJvZTkaj5PU/UTeymUNsvRwRc+RqPk9T9RN7KcjUfJ6n6ib2Uyhtl6OCLnyNR8nqfqJvZTkaj5PU/UTeymUNsvRwRc+RqPk9T9RN7KcjUfJ6n6ib2Uyhtl6OCLnyNR8nqfqJvZTkaj5PU/UTeymUNsvRwRc+RqPk9T9RN7KCCpJAFPUknQAQTEk/4plDbL0cERFJB2Qzz000NRTyyQzwvD4ZYnFskbhxa4aq58FYwbfonUNeWMu9PHtktAaysiboZWNGgcPHHz5jQ5MpRd9FWVdvq6SupH7FTSTNnhdw2m+K75iMw4eQrhdUrI/Z2qtcH9GzCL4rXcILrbrfcYP4VZTxzgbywuHfMOXFpzB6EWM/j4NVfJQOIq7tlfL1Whxcyasl5In+jH+yj/wCIC8tDvPSfvRb8VhYMVvLyEUKVJB6ljvlysFdHW0T8xo2op3ucIamLPVjwOPNOWh9Rviy3m3X2ghr6F5LH95LG/SWCUAbUUrRxH27xoVrmvXw/f7hh2vbWUp2437MdZTOJEdTEDnkfI4alp4dBINW+j8iyuyxTds+H0bEfren63r4LTdbdeaGnr6CXlIJQQQ4ZSRSDwopW56OHH16g5n71ktY+GaSeR+t6freiISP1vT9b0RAP1vT9b0RAP1vT9b0RAP1vT9b0RAP1vT9b0UIAq1xzjUw/CLJZ5iJu+iuNXE4jkeBghcD4XB54bt+ex3Y5xr8BE9ltE3764GOuqoz/AOI0jIxROH8w8T4v938OpVe0+nz5yKd9+PGIREWkUAiIgLTwBiKjobFJR1cmRguFSIASNIpGsm09LnIq0gmmjYQx5aC4kgZb8gOKKrLTRk2yzHUSSwfOd7uk/eiHe7pP3orRWMnwJTUtbiKGkqomzU1Tb7lFPE8d69joxmDlr0KMWYUq8N1W0zbmtVS8/A6gjMxnfyE5Gm2OB8YDPeCG9/Y7+NdB9DuH+sK6a6iorjS1FFWwtmpqhhZLG/cRvBBGoIOoI3EZqhbc6rfou11Kyo1pRZDinDFbhusDHbc1vqHE0VUR4XHkpctA8faNRxDceV2MlJZRTlFxeGe3hvEdfhyu+EQZyUsxayupScmzxji3PQPb4p9B0Kve2XKgu1FT19DMJaedubTucxw8JkjeDhuIWtq97DGJq7DdZyse1LQzuaK6lzAEjRoJI89A9vDy7j5W1tRRvW6PZZou2+MujYBSvloK+hudJT1tFM2amqGbcb2+otcN4cNxB3L6lldGiFClEAREQBQpRAEREBCwDHGNO1jZbRaZQbk9uzVVDCD8CY4eCw/1D9m/edO7G2M22dklstsjXXaVn7WQZObQxuG8jdyhHgjhvPAOptznPc573Oc97i57nElznOOZc4nXM8Vd0+n3eUuipfft8Y9kEkkkkkkkknUknXMkoiAOcWta1z3vc1jGMBc973HJrWtGpJ3ALS6M/slrZJHxxxsfJLK9scUcTS+SSR5yaxjW6kngrKZg5lhwjiG4XBrX3motzmkA7TKKJz2EwxkaFx8d3oGgzf7OCMFts7I7rdGNdd5WHkozk5tvjeMixvDlCPDPDcNMy/28Z/FfEX0J342qhZfumox6yX66dkXKXZQCIi0DPOyPwT0okfgnpRQSdZ3u6T96Id7ukopBlvY7+NdB9DuH+sK8lRvY7+NdB9DuH+sK8vSsrV/0NPTfzPkuNuoLrR1FDXQtmpp25PadCCNQ9jhqHDeCqIxLhqvw3W8hNtS0cxc6iqtnJszBqWPy0Dx4w9I0OmwXpXw3S12+8UU9BXxCSnmHDIPjePBkidwcOB/6OR503Op/R6tqVi+zW5F7OIsPXDDlcaWp/aQS7T6Kqa3JlTED5ODxptDh0EE+MteMlJZRlyi4vDMjwpimrw3VnPbmtlQ8GtpmnXPLLloc9NsfaBkdwLb0o6yjr6anrKOZk1NUMEkMsZza5p+3MbiDuyy4LWhZRhHFlVhyp5KbbltNTIDVQN1dC85D4RAOdzhxHzgKrqKN/lHss0XbfGXRe6LppqmlrIIKqlmjmp52NkhljO0x7DuIK7vSss0QielPSgCJ6VHpQErDMZ4xisUTqCgcyS8TMz4OZQxuGksgPjnxG+k6ZCTsxjjCHD8BpKRzJLxOzOJhyc2lY7+dKPLzRx6BrSU001RLNPPI+WaaR0sskhLnve45lzieJVzT0b/KXRVvu2+MeyJJJZZJJZXvklle6SWSRxc973Hac5zjqSd5XFFBIAJJyAWp0Z3ZOpyABJJAAAJJJOQAA1zPBW/gfBQtgivF2iBub27VLTvGYoWOG9w3cqRv8m7fmV0YFwSaPkL3eYcq4gPoKOUDOjB3Syg/zTwHi/3eBY3pWZqL93jHo0KKdvlLslY/jP4r4i+hO/G1ZB6Vj+M/iviL6E78bVVr/dFmf6soBERbpjHZH4J6USPwT0ooB1ne7pP3oh3u6T96KQZb2O/jXQfQ7h/rCvJUb2O/jXQfQ7h/rCvJZWr/AKGnpv5hERVCwedeLPbr3Qz0FdHtRSd8x7chLBKAQ2WJx3OH/o5g5Ghr9Yrjh+vfRVg2mu2n0tQ0ER1MIOW23yEeMM9D8xBdsUql7IeKKCvIslFHBO2mnElTVlofsTMzHJUzvm3PI6PKrelnJS2roq6iMXHL7K6REWqZxlmDsXT4eqBTVRfJaKiTOZgzc6le46zxAa5c8cd41HfXfBPBUww1FPKyWCaNssUkbg5j2OGYc0jgVrIsywZjGSwzNoa5zn2eZ+vhOdQyOOssYGuwfHb6RrmH0tRp93lHst0X48ZF2ouEckcsccsT2PjkY2SN8bg5j2OGYc1w0IPBc1mGgFiuLsW0+HabkYdiW7VDCaaEnMRMOY5eYDxR4o4keQEt7cV4qpMOUg2Qya51DD8CpiTllu5abLUMHrJ0HEsoyrq6yvqaisrJnzVNQ8yTSyHvnOOm4aADcABkAMhuVvT0b3ul0Vr7ti2rs41FRU1c89TUyvmqJ3mSaWQ5ue87yT+vsXUiLV6M0gkAEk5AaklWlgTBJjNPfb1DlMMpbZRTN/g8W1M7T4/MHi79/gVtQVbqCtoq1sME7qSdk7Yqlm3DIWHc4fceByPBbA2K+26/0MdbRuyOjKmF5HK082WZjky+w8Rr0UtVOUVhdFvTRi3l9nrIiLMNALH8Z/FfEX0J342rIFj+M/iviL6E78bV7r/dHmf6soBERbpjHZH4J6USPwT0ooB1u3u6T96hSd7uk/eikGW9jv410H0O4f6wry9So3sd/Gug+h3D/WFeSytX/Q09N/MepQpVdY5xr8CE9ltEv76QY66qjP8A4gI1ihcP5h4nxf7v4deEHN7UdZzUFlnRjrGph+EWOzzftu+iuNXE7+FwdTwuHjcHnhu3+BValFsV1KtYRlWWOx5ZClc4opp5YYII3yzzyNihiiG0+SRxyDWgcSrWt3Y0oe0s8Nxk/wDmaprZBUROLmUL2glsUbdA5v8AU8vDLIERZdGv9j1XVKzoqVSvsudsuForaigrouTqITwzMcjD4MkTiNWngfRoRkPjXVNNZRyaaeGZvgrGb7K9lsuUjnWiV55KR2bjQSOO8ceTPjDhvHEGxcTYpt+HqFk2cdRWVTCbfTtdmJdP4ry3+WNNeO4b9KDXJ8ksnJ8o97+TjbFHtuLtiNvgsbnuA4BVp6aM5bixHUSjHad9dXVtyq6mtrZnTVNQ/bke71BrRuDRuA4L5VKKylhYRXbb7ChZ9gjBPbUxXe7xHtYAXUVK/aaa07uVkG/kh4o8bfuHf+Zi/CVRh2o5eAPltFRJlTynvnU7zryEx/CePSNeSug57MnZ0yUdxii9Wx3y42CvjrqJwOgZUQPJEVTFnmY35etp4H1Hy0XVxUlhnJNxeUbGWW826+0MVfQvzY7vJY35CWCUAF0UrRxH27xoV6fqWu+H7/cMO1zaylO3G8NZV0ziRHUxA57J8jh4p4dBIN82q6269UMFwoJeUglGRBAEkUg8KKVuejhx9eoOZyLqXW/o06rVYvs+/wBSx/GfxXxF9Cd+NqyBY/jP4r4i+hO/G1cq/wB0dZ/qygFClFumMdkfgnpRI/BPSigHWd7uk/eiHe7pP3opBlvY7+NdB9DuH+sK8lRnY7+NdB9DuH+sLOcbYzbZ2SWu2va66ysHKyjJzaGNw3nhyhHgjhvPAOzNRBztwjQpkoVZZ1Y3xoLY2a0WqXO5Obs1VQw5ijY4eCwj+Yfs6d1PkkkkkkkkknUknUkkqXOc5znOc5znOLnOcSXOcTmS4nXM8VxV2qpVrCKdljseWSpaySR8ccbHySyvbFFHE0ukkkccmsY0akngoAc4ta1rnve5rGMYC573uOTWtaNSTuCuTBGC22dkd1ujGuu8rDyUZ75tvjeNWN4GQjwzw3DTMvW2qtZ/0mqp2P6O7BeDY7FE2vuDWSXmeMg5EOZQxO3wxHcXHx3egaDvs0UoseUnJ5ZqRiorCPAxPhmhxHRcjJlFWQBzqGqAzdE872vA3sd4w9O8Kibhb6611lRQ10LoamB2y9p1a4Hc9juLTvB//MhsqscxThaixJR7JLYbjTtcaKqIJ2SdTFLlqWO4+TePIbFF/wCN7X0cbqVNZXZQaL6K2irLfVVFFWwvhqqd5ZLG/eDvDgRoWne0jeF861U8/KMxrHwws5wTgt14fFdbpGRaY3bVPA8EGve07yP6Q/5btw16sFYNffpGXG4Mc2ywv7xpza64SNORY07+TB8I8dw4lt0sYyNjI2NaxjGtYxrAGta1oyDWgaZDgqOo1GPCJdop/wCpEhrWhrWgANAAAAAAGgAAXTVUtLW09RSVcLJqaojdFNFIM2vYeB49H/pd6LOLxQ2LcKVWG6oOj25rVUvIo6g6uY7fyE5Gm0OB8YDPeCBjK2WraKiuNLU0VbC2amqGcnLG/cRvBBGoI3gjUEZ8FRWKcL1mG6zYO3Nb6hzjRVJGp48jNloHj7RqOIbqae/f4y7M6+nb5R6MeXt4bxHcMOV3wiDOSmmLG11KTk2eMcW8A9uuyfRuK8NFalFSWGVoycXlGydsuVBd6Knr6CUS087c2nc5jho5kjd4cNxC8zGfxXxF9Cd+Nqp7DGJq7Ddbyse3LQzuaK6lz0kaNOUjz0Dxw8u4+Vtr4jr6G54MvVdRTNmpqi3l8b2/3tBa4HUOG4g7llypdVi9ZNKNqsg/ZRSIoWsZh2x+CelEj8E9KKAdZ3u6T96LvrKeSjq62klGUlNUTU8n90byw/cvnUg9C0XWrstY6vowz4UKWpp4XvGYidO0N5UN3EjgDp5c8sj8Ukkkr5JZHufJI90kj5HFz3vcdpznOOpJ4rgijCzknLxglNSQACSSGgNBJJJyAAGuZ4KCQASdytrAuCjRCC93mH9+IElBSSjWjad0so/qngPF/u8Dlbaq45Z0rrdjwd2B8FdrBDeLtEDc3s2qWnfqKFjhvd/9pG/ybt+ZVgKNE0WPObm8s1IxUVhEoo0TReT0SijRNEB4t9wxYsQsj+HwO5eJpZDVU7uTqI2k57IdkQW/MQR614FJ2MMLQTNlqJrjWMa7MQ1EsbIXDyPEDGuP+SznRTovatlFYTPDhFvLRwiiihjjiiYyOKNjY42RtDWMY0ZBrWtGQA4Lmo0TReMnslFGiaICV8dxt1BdaOpoa6ES087dl7ToQRqHscNQ4bwV9eiJnANfsS4ar8N1vIy7UtHMXGiqg3JsrRrsPy0DxxHpGm7wlsjdLZbrxRT0FfEJaeYD5nxvHgyRu4OHA/8ARyND4iw7cMOVxpajOSCTafRVTWkMqIx9zxptD/ognV09+9bX2Zt1Ozyj0eMvSobzcKGiu9ujftUV0p3RVELydlsmbS2ePLc4ZZHyjfuBb5qhWmk/hldNrolFCKSDtj8E9KLJcN4arL1RVFVDGxzI6ySnzcOLY43n8SLm7Ir4bParkzv7IdrdQYhnqWtygukbayMgacq0COZuflzAcf71h62AxVh6LEVrlpc2sq4SZ6CVw0ZMBlsuI12XDR3oPiqhKinqaSeopamJ8NRTyOimikGTmPHA/wDR47+K46azfHH+o66ivbLP+M6kRFaK56dkuVLaK6OvmtsVfLBk6kZUSvjihmBz5XZa0guHi57t+/Vuad1a4eZqXrUv5arhFylVCbzJHSNsorCZY/dWuHmal61L+WndWuHmal61L+Wq4ReePX6PX57PZY/dWuHmal61L+WndWuHmal61L+Wq4ROPX6H57PZY/dWuHmal61L+WndWuHmal61L+Wq4ROPX6H57PZY/dWuHmal61L+WndWuHmal61L+Wq4ROPX6H57PZY/dWuHmal61L+WndWuHmal61L+Wq4ROPX6H57PZY/dWuHmal61L+WndWuHmal61L+Wq4ROPX6H57PZY/dWuHmal61L+WndWuHmal61L+Wq4ROPX6H57PZY/dWuHmal61L+Wvgu2P23uimoK+wUj4ZO+Y4VcokhlAIbLE7k8w4fbuOhyODoiorXykHfN/DYREXc4hQSACTuAJPQNVKzLAmFpL1XRXKriPaiglDxtjvayqjObY2572NOrz82XE7Pic1CO5nuEHN4RZWCrXJZ8OWunlZs1M7XV1U06FstSeU2SPK0bLT0Isj1RYcm5PLNdLCwgsaxLhC1YjjEj86a4xs2YayJoLtkbmTM0Dm+kEcCM8jkqKYycXlBpSWGa/XfCGJ7K55qKGSenbmRVULXTwFo4uDRtt9LR0rH9tmZG03MaEZjMdIW0K+Se22mqdtVVBQzu8s9NDIfW9pVyOsaXkipLSp9M1p2mc5vrCbbOc31hbH9ocN+ZrT1Gm9hO0WG/M1p6jTewvfMXo88X7NcNtnOb6wm2znN9YWx/aHDfma09RpvYTtDhvzNaeo03sJzF6HF+zXDbZzm+sJts5zfWFsf2iw35mtPUab2E7Q4b8zWnqNN7Ccxehxfs1w22c5vrCbbOc31hbH9ocN+ZrT1Gm9hO0WG/M1p6jTewnMXocX7NcNtnOb6wm2znN/yC2P7Q4b8zWnqNN7CdocN+ZrT1Gm9hOYvQ4v2a4bbOc31hNtnOb6wtj+0WG/M1p6jTewnaLDfma09RpvYTmL0OL9muG2znN9YTbZzm+sLY/tDhvzNaeo03sJ2hw35mtPUab2E5i9Di/Zrhts5zfWE22c5vrC2P7RYb8zWnqNN7CdocN+ZrT1Gm9hOYvQ4v2a4bbOc31hNtnOb6wtj+0OG/M1p6jTewnaLDfma09RpvYTmL0OL9muG2znN/wAgu+lpqyukENDTVFXKfEpInzH07AIHpK2JFiw4CCLPagRuIoqYEf8ABfdHFDCwRxRxxsG5sbWsaPQ0ZKHrPSJWl9sqfD/Y0rZ3x1OIXCCmBDvgEEgdPLxynmYdlo8oaSfnCtanp6elhhp6aKOGCFjY4oomhjI2N0DWtGmS7UVOyyVjzItQgoLCCIi5nsKFKIAiIgChSiAIiICFKIgChSiAIiIAoUogCIiAhSiIAoUogCIiAKFKIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID//Z"
              alt=""
            />
          </div>
          <div className="close" onClick={this.handleClose}>
            <i className="fa fa-window-close" />
          </div>
        </div>
        {this.props.user.loggedIn ? (
          <ul>
            <li>
              <Link to="/messages/new">New Message</Link>
            </li>
            <li>
              <Link to="/messages/inbox">Inbox</Link>
            </li>
            <li>
              <Link to="/messages/sent">Sent Mails</Link>
            </li>
            <li>
              <Link to="/messages/drafts">Drafts</Link>
            </li>
            <li>
              <Link to="/groups">Groups</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/profile">Log Out</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/auth/register">Register</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        )}
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  user: state.user
});

Sidebar.propTypes = {
  toggleSlide: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { toggleSlide }
)(Sidebar);
