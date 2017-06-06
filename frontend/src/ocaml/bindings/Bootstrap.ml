(** A binding to bootstrap.native.js *)

type t

external bootstrap : t = "" [@@bs.val] [@@bs.module "bootstrap.native"]
