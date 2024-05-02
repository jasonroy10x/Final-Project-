import { useCallback } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ContrastController from "../components/ContrastController";
import "./Message.css";

const Message = () => {
  const onRectangleContainerClick = useCallback(() => {
    // Please sync "2.7 conference" to the project
  }, []);

  const onLinkContainerClick = useCallback(() => {
    // Please sync "2.7 Message Share files" to the project
  }, []);

  return (
    <div className="message">
      <div className="input-handler">
        <Sidebar />
        <div className="line" />
      </div>
      <main className="message-inner">
        <section className="header-parent">
          <Header />
          <div className="image-assembler">
            <div className="shape-combinator">
              <div className="chat-list">
                <div className="table-builder">
                  <div className="tittle">
                    <h2 className="chat">Chat</h2>
                    <div className="font-manager">
                      <img
                        className="icon-add"
                        loading="lazy"
                        alt=""
                        src="/icon-add.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="line1" />
                <div className="alignment-aligner">
                  <div className="spacing-organizer">
                    <div className="segmented-controls">
                      <button className="segment-wrapper">
                        <b className="segment">Open</b>
                      </button>
                      <div
                        className="segment-container"
                        onClick={onRectangleContainerClick}
                      >
                        <div className="segment1">Archived</div>
                      </div>
                    </div>
                  </div>
                  <div className="proximity-prober">
                    <div className="contrast-controller">
                      <div className="chat1">
                        <img
                          className="avatar-online-icon"
                          loading="lazy"
                          alt=""
                          src="/avatar-online1.svg"
                        />
                        <div className="text">
                          <div className="tittle1">
                            <b className="tittle2">Andreana Viola</b>
                            <div className="tittle3">1m ago</div>
                          </div>
                          <div className="mask-maker">
                            <div className="message1">
                              Hi, How are you today?
                            </div>
                            <div className="fill-filler">
                              <div className="message2">2</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="effect-engine" />
                    </div>
                    <div className="chat2">
                      <img
                        className="avatar-online-icon1"
                        alt=""
                        src="/avatar-online-11.svg"
                      />
                      <div className="text1">
                        <div className="tittle4">
                          <b className="tittle5">Francesco Long</b>
                          <div className="tittle6">2h ago</div>
                        </div>
                        <div className="scale-scaler">
                          <div className="message3">
                            <span>{`Hi `}</span>
                            <span className="angel">@Angel</span>
                            <span>, I hope you are doi...</span>
                          </div>
                          <div className="skew-skewer">
                            <div className="message4">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ContrastController
                      avatarOnline="/avatar-online-2.svg"
                      tittle="Alexandra Michu"
                      tittle1="09:00"
                      message="Hi, How are you today?"
                    />
                    <ContrastController
                      avatarOnline="/avatar-online-3.svg"
                      tittle="Hwang Lee"
                      tittle1="Today"
                      message="I hope it will be finished soon"
                      propBackgroundColor="unset"
                      propMinWidth="76px"
                    />
                    <div className="contrast-controller1">
                      <div className="chat3">
                        <img
                          className="avatar-online-icon2"
                          alt=""
                          src="/avatar-online-4.svg"
                        />
                        <div className="text2">
                          <div className="tittle7">
                            <b className="tittle8">Maximillian</b>
                            <div className="tittle9">23/11</div>
                          </div>
                          <div className="message-parent">
                            <div className="message5">
                              You: you are absolutely right!
                            </div>
                            <img className="check-icon" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="line2" />
                    </div>
                    <ContrastController
                      avatarOnline="/avatar-online-5.svg"
                      tittle="Xiao Ming"
                      tittle1="23/11"
                      message="Hi, How are you today?"
                      propBackgroundColor="unset"
                      propMinWidth="68px"
                    />
                    <div className="chat4">
                      <img
                        className="avatar-online-icon3"
                        alt=""
                        src="/avatar-online-6.svg"
                      />
                      <div className="text3">
                        <div className="tittle10">
                          <b className="tittle11">Xiao Ming</b>
                          <div className="tittle12">23/11</div>
                        </div>
                        <div className="message6">Okay, Great!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-body">
                <div className="header">
                  <div className="user">
                    <img
                      className="avatar-online-icon4"
                      alt=""
                      src="/avatar-online-7.svg"
                    />
                    <div className="text4">
                      <div className="tittle13">
                        <b className="tittle14">Alexandra Michu</b>
                        <div className="tittle15">09:00</div>
                      </div>
                      <div className="message7">Online</div>
                    </div>
                  </div>
                  <div className="icon">
                    <img
                      className="phone-icon"
                      loading="lazy"
                      alt=""
                      src="/phone.svg"
                    />
                    <img className="layout-sidebar-right-icon" alt="" />
                    <img
                      className="dots-vertical-icon"
                      alt=""
                      src="/dotsvertical.svg"
                    />
                  </div>
                </div>
                <div className="chat5">
                  <div className="symbol-symbolizer">
                    <div className="decorator-decorator">
                      <div className="marker-maker" />
                    </div>
                    <div className="message8">Today</div>
                    <div className="decorator-decorator1">
                      <div className="line3" />
                    </div>
                  </div>
                  <div className="path-pointer">
                    <div className="message-chat">
                      <img
                        className="avatar-icon"
                        alt=""
                        src="/avatar-1@2x.png"
                      />
                      <div className="message9">
                        <div className="message10">
                          <div className="message11">
                            Hi, How are you today?
                          </div>
                        </div>
                        <div className="time">9:00 AM</div>
                      </div>
                    </div>
                    <div className="input-field">
                      <div className="message-chat1">
                        <div className="message12">
                          <div className="time1">9:10 AM</div>
                          <div className="message13">
                            <div className="message14">
                              Hello Michu, I’m fine. How about you?
                            </div>
                          </div>
                        </div>
                        <img
                          className="avatar-icon1"
                          alt=""
                          src="/avatar@2x.png"
                        />
                      </div>
                    </div>
                    <div className="message-chat2">
                      <img
                        className="avatar-icon2"
                        alt=""
                        src="/avatar-1@2x.png"
                      />
                      <div className="message15">
                        <div className="message16">
                          <div className="message17">
                            Can you send a sample from a reference?
                          </div>
                        </div>
                        <div className="time2">9:11 AM</div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="frame">
                      <div className="message-chat3">
                        <div className="message18">
                          <div className="time3">10:10 AM</div>
                          <div className="message19">
                            <div className="message20">
                              This is the reference we will use
                            </div>
                            <div className="column">
                              <img
                                className="image-icon"
                                loading="lazy"
                                alt=""
                                src="/image@2x.png"
                              />
                              <img
                                className="image-icon1"
                                alt=""
                                src="/image-1@2x.png"
                              />
                              <img
                                className="image-icon2"
                                alt=""
                                src="/image-2@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          className="avatar-icon3"
                          alt=""
                          src="/avatar@2x.png"
                        />
                      </div>
                    </div>
                    <div className="message-chat4">
                      <img
                        className="avatar-icon4"
                        alt=""
                        src="/avatar-1@2x.png"
                      />
                      <div className="message21">
                        <button className="message22">
                          <img className="message-child" alt="" />
                        </button>
                        <div className="time4">10:40 AM</div>
                      </div>
                    </div>
                  </div>
                  <div className="typing">
                    <div className="time-wrapper">
                      <div className="time5">Write your message...</div>
                    </div>
                    <div className="shapes">
                      <img
                        className="mood-smile-icon"
                        alt=""
                        src="/moodsmile.svg"
                      />
                      <div className="link" onClick={onLinkContainerClick}>
                        <img className="group-icon" alt="" src="/group.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user-info">
                <div className="frame1">
                  <div className="tittle16">
                    <b className="tittle17">User Info</b>
                    <img
                      className="close-icon"
                      loading="lazy"
                      alt=""
                      src="/close.svg"
                    />
                  </div>
                  <div className="profile">
                    <img className="avatar-icon5" alt="" src="/avatar-6.svg" />
                    <div className="text5">
                      <b className="tittle18">Alexandra Michu</b>
                      <div className="tittle19">UX Researcher</div>
                    </div>
                  </div>
                </div>
                <div className="dropdown">
                  <div className="mindmaps">
                    <div className="flowcharts" />
                  </div>
                  <div className="diagrams">
                    <div className="tittle20">Project Team</div>
                  </div>
                  <div className="workspace">
                    <img
                      className="chevron-down-icon"
                      alt=""
                      src="/chevrondown-11.svg"
                    />
                  </div>
                </div>
                <div className="conditional-branch">
                  <div className="input-form" />
                  <div className="shared">
                    <div className="shared1">
                      <b className="tittle21">Shared Files</b>
                      <div className="list">
                        <div className="file">
                          <div className="loop-structure">
                            <img
                              className="variable-holder-icon"
                              loading="lazy"
                              alt=""
                              src="/frame-25.svg"
                            />
                            <div className="tittle-parent">
                              <div className="tittle22">Reference.zip</div>
                              <div className="tittle23">2 MB</div>
                            </div>
                          </div>
                          <img className="trash-icon" alt="" src="/trash.svg" />
                        </div>
                        <div className="file1">
                          <div className="frame-parent">
                            <img
                              className="frame-child"
                              alt=""
                              src="/frame-25-1.svg"
                            />
                            <div className="tittle-group">
                              <div className="tittle24">Doc0001.docx</div>
                              <div className="tittle25">1,025 KB</div>
                            </div>
                          </div>
                          <img
                            className="trash-icon1"
                            alt=""
                            src="/trash.svg"
                          />
                        </div>
                        <div className="file2">
                          <div className="frame-group">
                            <img
                              className="frame-item"
                              alt=""
                              src="/frame-25-2.svg"
                            />
                            <div className="tittle-container">
                              <div className="tittle26">Filex.pdf</div>
                              <div className="tittle27">2,25 KB</div>
                            </div>
                          </div>
                          <img
                            className="trash-icon2"
                            alt=""
                            src="/trash.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="links">
                      <b className="tittle28">Shared Links</b>
                      <div className="list1">
                        <div className="file3">
                          <div className="comparison-expression">
                            <img
                              className="boolean-operator-icon"
                              alt=""
                              src="/frame-25.svg"
                            />
                            <div className="ternary-operator">
                              <div className="tittle29">muz.li</div>
                              <div className="tittle30">https://muz.li.com</div>
                            </div>
                          </div>
                          <img
                            className="trash-icon3"
                            alt=""
                            src="/trash.svg"
                          />
                        </div>
                        <div className="file4">
                          <div className="frame-container">
                            <img
                              className="frame-inner"
                              alt=""
                              src="/frame-25.svg"
                            />
                            <div className="frame-div">
                              <div className="tittle31">Dribbble</div>
                              <div className="tittle32">
                                https://dribbble.com/rf...
                              </div>
                            </div>
                          </div>
                          <img
                            className="trash-icon4"
                            alt=""
                            src="/trash.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Message;
