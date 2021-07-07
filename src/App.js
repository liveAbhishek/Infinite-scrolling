import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton, Card, Avatar } from "antd";

const { Meta } = Card;

export default class App extends React.Component {
  state = {
    items: Array.from({ length: 50 }),
  };

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 50 })),
      });
    }, 5000);
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Infinite Scrolling</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={
            <>
              <Skeleton style={{ width: 240 }} loading={true} avatar active>
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                />
              </Skeleton>
              <Skeleton style={{ width: 240 }} loading={true} avatar active>
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                />
              </Skeleton>
              <Skeleton style={{ width: 240 }} loading={true} avatar active>
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                />
              </Skeleton>
            </>
          }
        >
          <div className="row">
            {this.state.items.map((i, index) => (
              <Card
                hoverable
                className="col-lg-5 my-2 mx-auto rounded"
                cover={
                  <img
                    alt="#"
                    style={{maxWidth:'100%'}}
                    src={"https://picsum.photos/400/400?random=" + index}
                  />
                }
              >
                <Meta title={"Container-# " + index} />
              </Card>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
